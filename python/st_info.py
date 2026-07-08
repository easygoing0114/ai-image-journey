"""
A script to display the structure and dimensions of a Safetensors file
"""
import sys
from pathlib import Path

try:
    from safetensors import safe_open
except ImportError:
    print("Error: The safetensors library is not installed.")
    print("To install it: pip install safetensors")
    sys.exit(1)


def get_desktop_path():
    """Get the path to the desktop (cross-platform support)"""
    return Path.home() / "Desktop"


def inspect_safetensors(file_path, output_file=None):
    """Display the structure of a Safetensors file"""
    file_path = Path(file_path)
    
    if not file_path.exists():
        print(f"Error: File not found: {file_path}")
        return
    
    # Determine the output destination (output to the desktop)
    if output_file is None:
        desktop = get_desktop_path()
        output_file = desktop / f"{file_path.stem}.txt"
    
    output_lines = []
    output_lines.append(f"File: {file_path}")
    output_lines.append(f"Size: {file_path.stat().st_size / (1024**2):.2f} MB")
    output_lines.append("=" * 80)
    
    # Open the safetensors file
    with safe_open(file_path, framework="pt", device="cpu") as f:
        # Display the metadata
        metadata = f.metadata()
        if metadata:
            output_lines.append("\n[Metadata]")
            for key, value in metadata.items():
                output_lines.append(f"  {key}: {value}")
        
        # Get the list of tensors
        keys = f.keys()
        output_lines.append(f"\n[Number of tensors] {len(keys)}")
        output_lines.append("=" * 80)
        output_lines.append("")
        
        # Display information for each tensor on a single line
        for key in keys:
            tensor = f.get_slice(key)
            shape = tensor.get_shape()
            dtype = tensor.get_dtype()
            output_lines.append(f"{key} | {shape} | {dtype}")
    
    # Write to the file
    output_text = "\n".join(output_lines)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(output_text)
    
    print(f"Results have been output to {output_file}")
    print(output_text)


def main():
    if len(sys.argv) < 2:
        print("Usage: python script.py <path to safetensors file> [output file name]")
        print("Example: python script.py model.safetensors")
        print("Example: python script.py model.safetensors output.txt")
        sys.exit(1)
    
    file_path = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None
    inspect_safetensors(file_path, output_file)


if __name__ == "__main__":
    main()