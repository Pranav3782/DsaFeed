import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
    from PIL import Image

def process_image(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        r, g, b, a = item
        # The text is black, the background is white/gray.
        # If it's dark, it's text.
        # Let's say if average(R,G,B) > 100, it's background, make it transparent.
        # To handle anti-aliasing, we can map lightness to alpha.
        lightness = (r + g + b) / 3.0
        
        # If it's very light (like checkerboard), alpha = 0
        if lightness > 150:
            new_data.append((r, g, b, 0))
        else:
            # Maybe keep it opaque, but to avoid white halos, let's make the color pure black
            # and use the lightness to determine opacity (darker = more opaque)
            # alpha = 255 if lightness is 0
            # alpha = 0 if lightness > 150
            alpha = int(255 * (1 - lightness/150))
            if alpha < 0: alpha = 0
            if alpha > 255: alpha = 255
            # We set the text to black because original text is black.
            # If the original had colors, this would ruin it, but the prompt image is black text.
            new_data.append((0, 0, 0, alpha))
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved processed image to {output_path}")

if __name__ == "__main__":
    input_file = r"C:\Users\Surya Pranav\.gemini\antigravity-ide\brain\ecae5c15-dca5-4ac6-873a-636510797579\.user_uploaded\media_1786632233344.jpg"
    output_file = r"C:\Users\Surya Pranav\Downloads\dsafeed\src\assets\images\logo_transparent.png"
    process_image(input_file, output_file)
