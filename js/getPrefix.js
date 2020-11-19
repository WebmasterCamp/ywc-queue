const getPrefix = (branch) => {
  switch (branch.toLowerCase()) {
    case 'content':
      return 'C'
    case 'programming':
      return 'P'
    case 'designer':
      return 'D'
    case 'marketing':
      return 'M'
  }
}
