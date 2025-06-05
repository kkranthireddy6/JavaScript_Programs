//input: 
  const inputData = {
  name: 'Suneel',
  location: ['Hyderabad', 'Chennai'],
  office: {
    office1: 'AT&T',
    office2: 'AT&T1',
  },
  pin: [1234, 5678],
  working: false,
};


//output: 
    const output = Object.values(inputData).flatMap(value=>
        typeof value === 'object' ? Object.values(value) : value
      )
    
    console.log(output)
