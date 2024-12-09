import * as React from 'react';
import {useState} from 'react';
import {createTheme, PaginationItem, ThemeProvider} from '@mui/material';
import Pagination from '@mui/material/Pagination';

import PropTypes from "prop-types";
import UserCard from "./UserCard";

const PaginationList = ({
                            data = [],
                            pageSize = 10,
                            renderItem,
                            color = '#c6183d',
                            shape = 'rounded',
                            variant='outlined',
                            size = 'small',
                            controlPosition = 'center',
                            controlStyle = {},
                            showFirstButton = true,
                            showLastButton = true,
                            customPaginationIcon = {}
                        }) => {


    const getPrimaryColorPalette = (colorPalette) => {

        if (['primary', 'secondary', 'standard'].includes(colorPalette)) {
            return {};
        } else {
            color = 'primary'
            return {
                primary: {
                    main: colorPalette ?? '#c6183d',
                },
            }
        }
    }

    const theme = createTheme({
        palette: getPrimaryColorPalette(color),
    });


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
        <ThemeProvider theme={theme}>
            {/* Render paginated data */}
            <div>
                {getCurrentPageData().map((item, index) => renderItem(item, index))}
            </div>

            {/* Render pagination controls */}
            <div style={{display: 'flex', justifyContent: controlPosition, marginTop: '20px', ...controlStyle}}>
                <Pagination
                    count={totalPages}
                    color={color}
                    shape={shape}
                    size={size}
                    variant={variant}
                    onChange={handlePageChange}
                    showFirstButton={showFirstButton}
                    showLastButton={showLastButton}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={customPaginationIcon}
                            {...item}
                        />
                    )}
                />
            </div>
        </ThemeProvider>
    );
}

let users = [];

for (let i = 1; i <= 30; i++) {
    users.push({
        id: i,
        name: 'John' + i, // or any other naming pattern
        email: 'john' + i + '@gmail.com',
        phone: '0123456789' + i
    });
}


PaginationList.defaultProps = {
    pageSize: 10,
    renderItem: (item, index) => <UserCard user={item}/>,
    data: [...users],
    color: '#c6183d',
    controlPosition: 'center',
    controlStyle: {}
}

PaginationList.propTypes = {
    data: PropTypes.array.isRequired,
    pageSize: PropTypes.number,
    renderItem: PropTypes.func,
    color: PropTypes.oneOfType([PropTypes.oneOf(['primary', 'secondary', 'standard']), PropTypes.string]),
    shape: PropTypes.oneOf(['circular', 'rounded',]),
    variant: PropTypes.oneOfType([PropTypes.oneOf(['outlined', 'text']), PropTypes.string]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    controlPosition: PropTypes.oneOf(['center', 'left', 'right']),
    controlStyle: PropTypes.object,
    customPaginationIcon: PropTypes.object,
}

export default PaginationList;