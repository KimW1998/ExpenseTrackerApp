import { View, Text, StyleSheet, FlatList } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-08-01'),
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-07-20'),
    },
    {
        id: 'e3',
        description: 'Some Bananas',
        amount: 5.99,
        date: new Date('2022-07-30'),
    },
    {
        id: 'e4',
        description: 'A Book',
        amount: 14.99,
        date: new Date('2022-07-14'),
    },
    {
        id: 'e5',
        description: 'A Book',
        amount: 21.99,
        date: new Date('2022-07-29'),
    },
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} PeriodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
