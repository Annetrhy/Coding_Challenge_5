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
// Step 5: Calculate Taxes (15% deduction)
function calculateTaxes(grossPay) {
    const taxRate = 0.15;
    return grossPay * taxRate;
}

// Step 6: Process Payroll
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}

// Step 7: Loop Through Employees
employees.forEach(employee => {
    const payrollReport = processPayroll(employee);
    console.log("Payroll Report:", payrollReport);
});