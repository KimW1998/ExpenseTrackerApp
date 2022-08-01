import { useContext } from 'react';
import {Text} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

function AlleExpenses() {
    const expensesCtx = useContext(ExpensesContext);
    return(<ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total"/>)
}

export default AlleExpenses;