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


//output: ["Suneel", "Hyderabad", "Chennai", "AT&T", "AT&T1", 1234, 5678, false]
//Method 1: Dynamic code
    const output = Object.values(inputData).flatMap(value=>
        typeof value === 'object' ? Object.values(value) : value
      )
    
    console.log(output)

//Method 2: 
  const outputArray = [
  inputData.name,
  ...inputData.location,
  ...Object.values(inputData.office),
  ...inputData.pin,
  inputData.working
]

console.log(outputArray)

//Method 3:
  const result = []
  
  result.push(inputData.name)
  inputData.location.map((loc)=> result.push(loc))
  Object.values(inputData.office).map(ofce=> result.push(ofce))
  inputData.pin.map(pin=>result.push(pin))
  result.push(inputData.working)
  
  console.log(result)
