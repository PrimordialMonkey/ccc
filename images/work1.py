import json
import tkinter as tk
from datetime import datetime, timedelta


# Read parking data from json file
with open("data2.json", "r") as f:
    parking_data = json.load(f)

# Set up tkinter window
window = tk.Tk()
window.title("Parking Fee Calculator")
window.geometry("400x300")

# Set up label and entry widget for license plate number
tk.Label(window, text="License Plate Number:").grid(row=0, column=0)
plate_entry = tk.Entry(window)
plate_entry.grid(row=0, column=1)

# Define function for calculating parking fee
def calculate_fee(plate_data):
    # Check if the user spent 1000 or more in the store
    if plate_data["shopping_amount"] >= 1000:
        return 0

    # Calculate parking duration
    in_time = datetime.fromisoformat('2023-02-26 09:01:45.236140')
    out_time = datetime.now()
    duration = out_time - in_time
    print('ระยะเวลาดิบ',duration)
    print('ค่าshopping',parking_data['ABC123']['shopping_amount'])


    # Calculate total number of hours
    total_hours = duration.total_seconds() // 3600
    print('เวลาที่ใช้คำนวณ',total_hours)

    # Calculate number of days and remaining hours
    days = total_hours // 24
    remaining_hours = total_hours % 24

    # Round remaining hours to nearest half hour
    if remaining_hours % 0.5 > 0:
        remaining_hours += 0.5 - (remaining_hours % 0.5)
    #print(remaining_hours)

    # Calculate parking fee for users who spent between 100 and 1000 baht in the store
    if 100 <= plate_data["shopping_amount"] < 1000:
        if total_hours <= 1:
            return 0
        else:
            return ((days * 720) + ((remaining_hours - 1) * 30) )

    # Calculate parking fee for users who did not spend in-store
    if total_hours < 1:
        print("hours",total_hours)
        return 30
    else:
        return (days * 720) + (remaining_hours * 30)

# Define function for handling button click
def ok_button_click():
    # Get user input
    plate_number = plate_entry.get()

    # Check if license plate number is already in parking data
    if plate_number in parking_data:
        plate_data = parking_data[plate_number]
       # if plate_data["parking_time"] is not None:
       #     tk.messagebox.showerror("Error", "This license plate is already parked.")
       #     return
    else:
        tk.messagebox.showerror("Error", "This license plate is not registered.")
        return

    # Calculate parking fee
    parking_fee = calculate_fee(plate_data)

    # Update plate data with parking fee
    plate_data["parking_fee"] = parking_fee

    # Update parking data
    parking_data[plate_number] = plate_data

    # Write updated parking data to new json file
    with open("data4.json", "w") as f:
        json.dump(parking_data, f)

    # Show parking fee
    tk.messagebox.showinfo("Parking Fee", f"Your parking fee is {parking_fee} baht.")

# Create "OK" button
ok_button = tk.Button(window, text="OK", command=ok_button_click)
ok_button.grid(row=1, column=1)

# Start tkinter event loop
window.mainloop()
