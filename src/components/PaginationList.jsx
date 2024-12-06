import * as React from 'react';
import {useState} from 'react';
import Pagination from '@mui/material/Pagination';

import PropTypes from "prop-types";
import {Box, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import UserCard from "./UserCard";

const PaginationList = ({data=[], pageSize=10, renderItem, color='primary', shape, variant, size, controlPosition='center', controlStyle={}}) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(data.length / pageSize);

    // Get items for the current page
    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        console.log('indexes', [startIndex, endIndex]);
        console.log('data', data.slice(startIndex, endIndex))

        return data.slice(startIndex, endIndex);
    };

    // Handle page change
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            {/* Render paginated data */}
            <Box >
                {getCurrentPageData().map((item, index) => renderItem(item, index))}
            </Box>

            {/* Render pagination controls */}
            <Box display="flex" justifyContent={controlPosition} marginTop={2} style={controlStyle}>
                <Pagination
                    count={totalPages}
                    color={color}
                    shape={shape}
                    size={size}
                    variant={variant}
                    onChange={handlePageChange}
                />
            </Box>
        </div>
    );
}

let users = [];

for(let i=1; i<=30; i++){
    users.push({
        id: i,
        name: 'John' + i, // or any other naming pattern
        email: 'john'+i+'@gmail.com',
        phone: '0123456789'+i
    });
}


PaginationList.defaultProps = {
    pageSize: 10,
    renderItem: (item, index) => <UserCard user={item} />,
    data: [...users],
    color: 'primary',
    controlPosition: 'center',
    controlStyle: {}
}

PaginationList.propTypes = {
    data: PropTypes.array.isRequired,
    pageSize: PropTypes.number,
    renderItem: PropTypes.func,
    color: PropTypes.oneOf(['primary', 'secondary', 'standard']),
    shape: PropTypes.oneOf(['circular', 'rounded',]),
    variant: PropTypes.oneOf(['outlined', 'text',]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    controlPosition: PropTypes.oneOf(['center', 'left', 'right']),
    controlStyle: PropTypes.object,
}

export default PaginationList;