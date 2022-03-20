import { useState } from "react"
import { TextField, Button, Alert } from "@mui/material"
import ReactDOM from 'react-dom'
import Navigation from "../../component/Navigation"

export default function CGPA() {
    const [ no , setNo ] = useState(0)
    const [ num , setNum ] = useState(0)
    let [ GPA , setGPA ] = useState([])
    const [ res , setRes ] = useState(0)
    let route = [
        { 
            title : "R2013",
            path  : "/R2013"
        },
        { 
            title : "CGPA",
            path  : "/R2013/CGPA"
        }
    ]

    const numberToArray = () => {
        var arr = [];
        for(let i = 0; i < no; i++) {
            arr.push(i)
        }
        return arr;
    }
    function handleNum(e) {
        setNum(numberToArray(no))
    }
    function calculate() {
        let sum = 0
        for(let i = 0; i<no; i++) {
            sum = sum+GPA[i]
        }
        if(Number.isNaN(sum/no)){
            ReactDOM.render(<Alert severity="warning">All Fields Must be Filled!</Alert>,document.getElementById("alert"))
        }
        return setRes(sum/no)
    }
    return(
        <div className="min-h-screen flex">
            <div className="m-auto px-5">
                <Navigation nav={route} />
                {
                    num === 0 ? 
                    <>
                    <p className='text-xl text-center sm:text-3xl mb-5'> R2013-CGPA CALCULATOR  </p>
                    <form className="flex flex-wrap justify-between">
                        <TextField id="num" type="number" color="primary" onChange={(e) => setNo(e.target.value)} className="w-auto hover:outline-none mx-auto" label="No. of Papers"/>
                        <TextField variant="outlined" onClick={(e) => handleNum(e)} className='text-lg mx-auto' type={"submit"} value="Start"> Start </TextField>
                    </form> 
                    </>
                    :
                    <div>
                        <div className="flex justify-between gap-4">
                            <p className='text-xl sm:text-3xl mb-8'> R2013-CGPA CALCULATOR  </p>
                            <Button variant="outlined" size="small" className="h-8" onClick={() => setNum(0)}>Back</Button>
                        </div>
                        <div id="alert" className="-mt-4 mb-4"></div>
                        {
                            num.map(e => {
                                return <>
                                    <div key={e} className="mb-5 flex flex-wrap justify-between gap-4">
                                        <p className="pt-2">Semester { e+1 }</p>
                                        <TextField required variant="outlined" size="small" type="number" onChange={(event) => GPA[e] = parseInt(event.target.value)} label={"Semester "+(e+1)+" GPA"} className=""/>
                                    </div>
                                </>
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