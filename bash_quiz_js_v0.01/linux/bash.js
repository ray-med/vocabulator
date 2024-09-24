// This file is all bash command object
export let bash = {
  description: 'Big bash object',
  ff: 'dfg'
}

bash['ls'] = {
  description: 'ls shows list of files in the directory',
  a: {
    description: '-a flag shows ls with hidden files.'
  },
  l: {
    description: '-l flag shows ls in long format.'
  },
  h: {
    description: '-h flag shows ls with human readable bytes format.'
  }
}
