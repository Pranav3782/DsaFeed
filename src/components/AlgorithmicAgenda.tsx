import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Plus, Trash2, ChevronLeft, ChevronRight, Check, X, AlertCircle } from 'lucide-react';
import { playUISound } from '../utils/audio';

interface AgendaTask {
  id: string;
  text: string;
  completed: boolean;
}

type AgendaData = Record<string, AgendaTask[]>;

export const AlgorithmicAgenda: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  // Tasks stored by YYYY-MM-DD
  const [agenda, setAgenda] = useState<AgendaData>({});
  
  const [newTaskInput, setNewTaskInput] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [showAddConfirm, setShowAddConfirm] = useState(false);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('dsafeed_agenda');
    if (saved) {
      try {
        setAgenda(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse agenda");
      }
    }
  }, []);

  // Save to local storage whenever agenda changes
  useEffect(() => {
    localStorage.setItem('dsafeed_agenda', JSON.stringify(agenda));
  }, [agenda]);

  // Calendar Helpers
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDateString = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDayClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(date);
  };

  // Task Actions
  const handleAddTaskAttempt = () => {
    if (!newTaskInput.trim()) return;
    setShowAddConfirm(true);
  };

  const confirmAddTask = () => {
    if (!selectedDate || !newTaskInput.trim()) return;
    
    const dateStr = formatDateString(selectedDate);
    const newTask: AgendaTask = {
      id: Date.now().toString(),
      text: newTaskInput.trim(),
      completed: false
    };

    setAgenda(prev => ({
      ...prev,
      [dateStr]: [...(prev[dateStr] || []), newTask]
    }));
    
    setNewTaskInput('');
    setShowAddConfirm(false);
  };

  const toggleTask = (taskId: string) => {
    if (!selectedDate) return;
    const dateStr = formatDateString(selectedDate);
    
    setAgenda(prev => ({
      ...prev,
      [dateStr]: prev[dateStr].map(t => t.id === taskId ? { ...t, completed: !t.completed } : t)
    }));
  };

  const confirmDeleteTask = (taskId: string) => {
    if (!selectedDate) return;
    const dateStr = formatDateString(selectedDate);
    
    setAgenda(prev => ({
      ...prev,
      [dateStr]: prev[dateStr].filter(t => t.id !== taskId)
    }));
    setConfirmDeleteId(null);
  };

  // Render Calendar
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanksArray = Array.from({ length: firstDay }, (_, i) => i);

  const selectedDateStr = selectedDate ? formatDateString(selectedDate) : '';
  const currentDayTasks = selectedDateStr ? (agenda[selectedDateStr] || []) : [];

  return (
    <div className="bg-white  rounded-3xl p-6 shadow-sm border border-[#EAEAEA]  mt-8">
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#EEF4FF]  flex items-center justify-center text-[#3478E5] ">
          <CalendarIcon className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-black text-[#101B3D] ">Algorithmic Agenda</h2>
          <p className="text-sm text-[#8C8C8C] font-medium">Plan your daily coding quests</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Calendar View */}
        <div className="bg-[#FAFAFA]  p-5 rounded-2xl border border-[#EAEAEA] ">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-extrabold text-[#101B3D] ">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <div className="flex gap-2">
              <button onClick={prevMonth} className="p-1.5 hover:bg-[#EAEAEA]  rounded-lg text-[#101B3D]  transition">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextMonth} className="p-1.5 hover:bg-[#EAEAEA]  rounded-lg text-[#101B3D]  transition">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
              <div key={d} className="text-[10px] font-black uppercase text-[#8C8C8C] py-1">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {blanksArray.map(b => (
              <div key={`blank-${b}`} className="aspect-square"></div>
            ))}
            {daysArray.map(day => {
              const dateStr = formatDateString(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
              const hasTasks = agenda[dateStr] && agenda[dateStr].length > 0;
              const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth.getMonth() && selectedDate.getFullYear() === currentMonth.getFullYear();
              
              return (
                <button
                  key={day}
                  onClick={() => handleDayClick(day)}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center relative transition-all font-bold text-sm
                    ${isSelected 
                      ? 'bg-[#3478E5] text-white shadow-md' 
                      : 'hover:bg-[#EAEAEA]  text-[#101B3D] '
                    }
                  `}
                >
                  {day}
                  {hasTasks && (
                    <div className={`w-1.5 h-1.5 rounded-full absolute bottom-1 ${isSelected ? 'bg-white' : 'bg-[#3478E5]'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tasks View */}
        <div className="relative flex flex-col h-full min-h-[300px]">
          {selectedDate ? (
            <>
              <h3 className="font-extrabold text-[#101B3D]  mb-4 flex items-center justify-between">
                <span>Quests for {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}</span>
                <span className="text-xs bg-[#EEF4FF]  text-[#3478E5]  px-2.5 py-1 rounded-full">
                  {currentDayTasks.length} total
                </span>
              </h3>

              {/* Task List */}
              <div className="flex-1 overflow-y-auto space-y-2 mb-4 hide-scrollbar">
                <AnimatePresence mode="popLayout">
                  {currentDayTasks.length === 0 ? (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="text-center py-10 text-[#8C8C8C] text-sm font-medium"
                    >
                      No quests planned yet. Take a break or add one!
                    </motion.div>
                  ) : (
                    currentDayTasks.map(task => (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="group flex items-center justify-between p-3 bg-[#FAFAFA]  rounded-xl border border-[#EAEAEA] "
                      >
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => toggleTask(task.id)}
                            className={`w-5 h-5 rounded flex items-center justify-center transition-colors border
                              ${task.completed 
                                ? 'bg-[#55C990] border-[#55C990] text-white' 
                                : 'border-[#C0C0C0]  bg-white '
                              }
                            `}
                          >
                            {task.completed && <Check className="w-3 h-3" />}
                          </button>
                          <span className={`text-sm font-semibold transition-all ${task.completed ? 'text-[#8C8C8C] line-through' : 'text-[#101B3D] '}`}>
                            {task.text}
                          </span>
                        </div>
                        
                        {confirmDeleteId === task.id ? (
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-red-500 uppercase mr-1">Delete?</span>
                            <button onClick={() => confirmDeleteTask(task.id)} className="p-1.5 bg-red-100 text-red-600 rounded-md hover:bg-red-200"><Check className="w-3 h-3" /></button>
                            <button onClick={() => setConfirmDeleteId(null)} className="p-1.5 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"><X className="w-3 h-3" /></button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => { playUISound(); setConfirmDeleteId(task.id); }}
                            className="text-[#8C8C8C] hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Add Task Input */}
              <div className="relative mt-auto">
                <input
                  type="text"
                  value={newTaskInput}
                  onChange={(e) => setNewTaskInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddTaskAttempt()}
                  placeholder="E.g., Review Linked Lists..."
                  className="w-full bg-[#FAFAFA]  border border-[#EAEAEA]  rounded-xl py-3 pl-4 pr-12 text-sm font-semibold text-[#101B3D]  focus:outline-none focus:border-[#3478E5] transition-colors"
                />
                <button
                  onClick={() => { playUISound(); handleAddTaskAttempt(); }}
                  disabled={!newTaskInput.trim()}
                  className="absolute right-2 top-2 bottom-2 aspect-square bg-[#3478E5] hover:bg-[#2864C6] disabled:bg-gray-300 text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add Confirm Dialog Overlay */}
              <AnimatePresence>
                {showAddConfirm && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-0 left-0 right-0 mx-0 sm:mx-4 bg-white  p-4 rounded-xl shadow-2xl border border-[#EAEAEA]  flex flex-col gap-3 z-[20]"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-[#3478E5] shrink-0" />
                      <div>
                        <h4 className="font-bold text-sm text-[#101B3D] ">Add this quest?</h4>
                        <p className="text-xs text-[#8C8C8C] mt-0.5">"{newTaskInput}" will be added to your agenda for {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}.</p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-1">
                      <button onClick={() => setShowAddConfirm(false)} className="px-3 py-1.5 text-xs font-bold text-[#8C8C8C] hover:text-[#101B3D] ">Cancel</button>
                      <button onClick={confirmAddTask} className="px-4 py-1.5 bg-[#3478E5] text-white text-xs font-black rounded-lg shadow-sm">Confirm Add</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-[#EAEAEA]  rounded-2xl bg-[#FAFAFA] ">
              <CalendarIcon className="w-10 h-10 text-[#D0D0D0]  mb-3" />
              <h3 className="font-extrabold text-[#101B3D]  text-base">No Date Selected</h3>
              <p className="text-sm text-[#8C8C8C] font-medium mt-1">Select a day on the calendar to view or add algorithmic quests.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
