import { View, Text, StyleSheet, FlatList } from "react-native";

function ExpensesSummary({expenses, PeriodName}) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

  return(
  <View>
    <Text>{PeriodName}</Text>
    <Text>${expensesSum.toFixed(2)}</Text>
  </View>
  );
}

export default ExpensesSummary;
