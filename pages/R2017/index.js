import { Button } from "@mui/material"
import Navigation from "../../component/Navigation"

export default function R2017() {
    let route = [
        { 
            title : "R2017",
            path  : "/R2017"
        }
    ]
    return(
        <div className="min-h-screen flex">
            <div className="m-auto">
                <Navigation nav={route}/>
                <p className='text-3xl mb-5'> Select Type  </p>
                <Button className='w-full text-lg' variant="contained" href="/R2017/GPA">
                    GPA
                </Button> <br /> <br />
                <Button variant="contained" className='w-full text-lg' href="/R2017/CGPA">
                    CGPA
                </Button>
            </div>
        </div>
    )
}