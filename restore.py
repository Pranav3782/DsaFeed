import re

with open("scratch/profile.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

out = []
for line in lines:
    match = re.match(r"^\d+:\s(.*)$", line)
    if match:
        out.append(match.group(1))
    else:
        out.append(line)

with open("src/components/ProfileDashboard.tsx", "w", encoding="utf-8") as f:
    f.write("\n".join(out))
