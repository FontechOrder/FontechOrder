export const isActiveBlockIndex = ({
  index,
  activeBlockIndexes,
}: {
  index: number
  activeBlockIndexes: number[]
}): boolean => activeBlockIndexes.includes(index)

export const returnDeletedLinesReminderBlockIndexes =
  ({
    reminderBlockIndexes = Array<number>(),
    check = 800,
    addition = 0,
  }: {
    reminderBlockIndexes?: number[]
    check?: number
    addition?: number
  }): number[] => {
    if (check == 0) {
      return []
    }

    const newCheck = check - 20
    const passReminderBlockIndexes =
      reminderBlockIndexes.filter(
        each => each <= newCheck
      )
    const currentReminderBlockIndexes =
      reminderBlockIndexes
        .filter(
          each => each > newCheck && each <= check
        )
        .map(each => each + addition * 20)

    const checkedReminderBlockIndexes =
      reminderBlockIndexes.filter(
        each => each > check
      )

    if (
      currentReminderBlockIndexes.length == 20
    ) {
      return [
        ...returnDeletedLinesReminderBlockIndexes(
          {
            reminderBlockIndexes:
              passReminderBlockIndexes,
            check: newCheck,
            addition: addition + 1,
          }
        ),
        ...checkedReminderBlockIndexes,
      ]
    }

    return [
      ...returnDeletedLinesReminderBlockIndexes({
        reminderBlockIndexes:
          passReminderBlockIndexes,
        check: newCheck,
        addition: addition,
      }),
      ...currentReminderBlockIndexes,
      ...checkedReminderBlockIndexes,
    ]

    // const sortedReminderBlockIndexes = [
    //   ...reminderBlockIndexes,
    // ]
    //   .sort()
    //   .reverse()

    // console.log(
    //   'REMINDER_DELETE_LINES sortedReminderBlockIndexes: ',
    //   sortedReminderBlockIndexes
    // )
    // return reminderBlockIndexes
  }
