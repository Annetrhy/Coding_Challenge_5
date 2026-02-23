//  Employee Array
const employees = [
    { name: "Alice Johnson", hourlyRate: 20, hoursWorked: 38 },
    { name: "Mark Davis", hourlyRate: 25, hoursWorked: 45 },
    { name: "Sofia Ramirez", hourlyRate: 18, hoursWorked: 50 },
    { name: "James Lee", hourlyRate: 30, hoursWorked: 40 }
];

// Calculate Base Pay (max 40 hours)
function calculateBasePay(rate, hours) {
    const regularHours = Math.min(hours, 40);
    return regularHours * rate;
}

// Calculate Overtime Pay (1.5x over 40 hours)
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        const overtimeHours = hours - 40;
        return overtimeHours * rate * 1.5;
    }
    return 0;
}
