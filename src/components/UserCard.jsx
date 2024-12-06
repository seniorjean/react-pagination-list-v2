import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import * as React from "react";

const UserCard = ({user}) => {
    return <Table style={{backgroundColor: '#f9f9f9', borderRadius: '10px', margin: '10px 10px'}}>
        <TableHead>
            <TableRow>
                <TableCell style={{border: 'none', fontWeight: 'bold', padding: '5px 10px'}}><span style={{color: '#cb3b2a'}}>Nom</span></TableCell>
                <TableCell style={{border: 'none', fontWeight: 'bold', padding: '5px 10px'}}><span style={{color: '#cb3b2a'}}>Email</span></TableCell>
                <TableCell style={{border: 'none', fontWeight: 'bold', padding: '5px 10px'}}><span style={{color: '#cb3b2a'}}>Téléphone</span></TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            <TableRow style={{padding: '5px'}}>
                <TableCell style={{border: 'none', padding: '5px 10px'}}>{user.name}</TableCell>
                <TableCell style={{border: 'none', padding: '5px 10px'}}>{user.email}</TableCell>
                <TableCell style={{border: 'none', padding: '5px 10px'}}>{user.phone}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
}

export default UserCard;