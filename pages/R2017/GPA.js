import { Button, TextField, Select, MenuItem, InputLabel, FormControl, Alert } from "@mui/material"
import { useState } from "react"
import ReactDOM from 'react-dom'
import Navigation from "../../component/Navigation"

export default function GPA() {
    let [ Credit ,setCredit ] = useState([])
    let [ Grade ,setGrade ] = useState([])
    const [ res , setRes ] = useState(0)
    const [ no , setNo ] = useState(0)
    const [ num , setNum ] = useState(0)
    let route = [
        { 
            title : "R2017",
            path  : "/R2017"
        },
        { 
            title : "GPA",
            path  : "/R2017/GPA"
        }
    ]
    const numberToArray = (number) => {
        var arr = [];
        for(let i = 0; i < no; i++) {
            arr.push(i)
        }
        return arr;
    }
    function handleChange(event,e) {
        Grade[e] = event.target.value
    }
    function handleNum(e) {
        setNum(numberToArray(no))
    }
    function calculate() {
        let sum = 0
        let credits = 0
        for(let i = 0; i<no; i++) {
            sum = sum + ( Credit[i] * Grade[i] )
            credits = credits + Credit[i]
        }
        if(Number.isNaN(sum/credits)){
            ReactDOM.render(<Alert severity="warning">All Fields Must be Filled!</Alert>,document.getElementById("alert"))
        }
        return setRes(sum/credits)

    }
    return(
        <div className="min-h-screen flex">
            <div className="m-auto px-5">
                <Navigation nav={route} />
                {
                    num === 0 ? 
                    <>
                    <p className='text-xl text-center sm:text-3xl mb-5'> R2017-GPA CALCULATOR  </p>
                    <form className="flex flex-wrap justify-between">
                        <TextField id="num" type="number" color="primary" onChange={(e) => setNo(e.target.value)} className="w-auto hover:outline-none mx-auto" label="No. of Papers"/>
                        <TextField variant="outlined" onClick={(e) => handleNum(e)} className='text-lg mx-auto' type={"submit"} value="Start"> Start </TextField>
                    </form> 
                    </> :
                    <div>
                        <div className="flex justify-between gap-4">
                            <p className='text-xl sm:text-3xl mb-8'> R2017-GPA CALCULATOR  </p>
                            <Button variant="outlined" size="small" className="h-8" onClick={() => setNum(0)}>Back</Button>
                        </div>
                        <div id="alert" className="-mt-4 mb-4"></div>
                        {
                            num.map(e => {
                                return <div key={e} className="mb-5 flex flex-wrap justify-between gap-4">
                                    <p className="pt-2">Subject { e+1 }</p>
                                    <TextField required variant="outlined" size="small" type="number" onChange={(event) => Credit[e] = parseInt(event.target.value)} label="Credit" className="w-24 sm:w-28"/>
                                    <FormControl>
                                    <InputLabel size="small" id="demo-simple-select-label">Grade</InputLabel>
                                    <Select
                                        required
                                        size="small"
                                        className="w-24 sm:w-28"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={Grade[e]}
                                        label="Grade"
                                        onChange={(event) => handleChange(event,e)}
                                    >
                                        <MenuItem value={10}>0</MenuItem>
                                        <MenuItem value={9}>A+</MenuItem>
                                        <MenuItem value={8}>A</MenuItem>
                                        <MenuItem value={7}>B+</MenuItem>
                                        <MenuItem value={6}>B</MenuItem>
                                        <MenuItem value={0}>RA (or) Others</MenuItem>
                                    </Select>
                                    </FormControl>
                                </div>
                            })
                        }
                        <div className="flex justify-between">
                            <Button variant="outlined" size="small" onClick={() => calculate()} className="h-8">Calculate GPA</Button>
                            {
                                res !== 0 ? <p className="mt-auto">GPA = <span>{ !Number.isNaN(res) ? parseFloat(res).toFixed(2) : <>&#128533;</> }</span></p> : ""
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}