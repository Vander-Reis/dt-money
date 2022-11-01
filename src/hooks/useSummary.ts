import { TransactionsContext } from '../context/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  // novo objeto retornado do reduce = {income: 0, outcome: 0, total: 0}

  // antes do reduce meu objeto transaction {
  // {
  //     id: 1,
  //     description: 'Desenvolvimento de site',
  //     type: 'income',
  //     category: 'venda',
  //     price: 14000,
  //     createdAt: '2022-10-31T22:44:19.512Z'
  // }

  // objeto retornado apos o uso do reduce
  //   {
  //     income: 0,
  //     outcome: 0,
  //     total: 0,
  //   }

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
