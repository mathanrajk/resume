import React from 'react'
import classes from "./tabledata.module.css"
import{workingexp} from "./workingexp"
function Tabledata() {
    return (
        <div className={classes.maincontainer}>
            <table className={classes.tableshow}> 
            <tbody>
                <tr>
                    <td>Company name</td>
                    <td>:</td>
                    <td>{workingexp.companyname}</td>
                </tr>
                <tr>
                    <td>Current role</td>
                    <td>:</td>
                    <td>{workingexp.role}</td>
                </tr>
                <tr>
                    <td>Current designation</td>
                    <td>:</td>
                    <td>{workingexp.designation}</td>
                </tr>
                <tr>
                    <td>Working product</td>
                    <td>:</td>
                    <td>{workingexp.product}</td>
                </tr>
                <tr>
                    <td>Experience</td>
                    <td>:</td>
                    <td>{workingexp.experience}</td>
                </tr>
                <tr>
                    <td>Join date</td>
                    <td>:</td>
                    <td>{workingexp.joindate}</td>
                </tr>
                </tbody>    
            </table>
        </div>
    )
}

export default Tabledata