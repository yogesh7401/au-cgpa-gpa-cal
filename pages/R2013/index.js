import { Button } from "@mui/material"
import Navigation from "../../component/Navigation"

export default function R2013() {
    let route = [
        { 
            title : "R2013",
            path  : "/R2013"
        }
    ]
    return(
        <div className="min-h-screen flex">
            <div className="m-auto">
                <Navigation nav={route}/>
                <p className='text-3xl mb-5'> Select Type  </p>
                <Button className='mb-5 w-full text-lg' variant="contained" href="/R2017/GPA">
                    GPA
                </Button> <br />
                <Button variant="contained" className='w-full text-lg' href="/R2017/CGPA">
                    CGPA
                </Button>
            </div>
        </div>
    )
}