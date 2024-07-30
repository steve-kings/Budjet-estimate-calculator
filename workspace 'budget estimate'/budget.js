function calculateBudget() {
    const salary = parseFloat(document.getElementById('salary').value);
    var expenses = parseFloat(document.getElementById('expenses').value);
    const remainingBudget = salary - expenses;
    
    let message = '';
    if (remainingBudget > 0) {
        message = `You have a surplus of $${remainingBudget.toFixed(2)}.conglatulation continue  Saving wisely!`;
    } else if (remainingBudget < 0) {
        message = `You are $${Math.abs(remainingBudget).toFixed(2)} over budget. Review your expenses.`;
    } else {
        message = `You have used up your entire salary. Budget better next time.`;
    }
    
    document.getElementById('result').textContent = message;
}