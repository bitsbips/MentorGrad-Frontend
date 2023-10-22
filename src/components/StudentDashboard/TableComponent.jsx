import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, makeStyles } from '@mui/material';
import User from '../../Assets/Images/user.svg'
import { ActionText, BackAction, BackView, DateDashboard, EmailDashboard, NameDashboard, ViewText } from './StudentDashboardStyles';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import useMediaQuery from '../../hooks/MediaQuery';

const Basicheaders = ['BASIC INFO', 'CREATED DATE', 'TAGS', 'ACTION']; // Basic headers
const Invoiceheaders = ['INVOICE NO', 'MENTEE', 'AMOUNT', 'PAID ON', ""]; // Invoice headers

const data = [
    {
        image: User,
        name: 'John Doe',
        email: 'john.doe@example.com',
        DATE: '02 October 2023',
        TAGS: 'PENDING',
    },
    {
        image: User,
        name: 'John Doe',
        email: 'john.doe@example.com',
        DATE: '02 October 2023',
        TAGS: 'PENDING',
    },
    {
        image: User,
        name: 'John Doe',
        email: 'john.doe@example.com',
        DATE: '02 October 2023',
        TAGS: 'ACCEPTED',
    },
    {
        image: User,
        name: 'John Doe',
        email: 'john.doe@example.com',
        DATE: '02 October 2023',
        TAGS: 'REJECTED',
    },
];

const invData = [
    {
        image: User,
        name: 'John Doe',
        invNo: 'INV-0001',
        email: 'john.doe@example.com',
        DATE: '02 October 2023',
        AMOUNT: '100$',
    },
    {
        image: User,
        name: 'John Doe',
        invNo: 'INV-0002',
        email: 'john.doe@example.com',
        DATE: '02 October 2023',
        AMOUNT: '200$',
    },
    {
        image: User,
        name: 'John Doe',
        invNo: 'INV-0003',
        email: 'john.doe@example.com',
        DATE: '02 October 2023',
        AMOUNT: '300$',
    },
    {
        image: User,
        name: 'John Doe',
        invNo: 'INV-0004',
        email: 'john.doe@example.com',
        DATE: '02 October 2023',
        AMOUNT: '300$',
    },
];

const TableComponentDashboard = ({type}) => {
    const isMobile = useMediaQuery('(min-width: 950px)');
    const [tableHeader, setTableHeader] = React.useState([]);

    useEffect(() => {
    if (type === "Invoice") {
        setTableHeader(Invoiceheaders);
    }else{
        setTableHeader(Basicheaders);
    }
    }, [])
    
    return (
        <TableContainer sx={{ width:isMobile ? '100%' : '105%', margin: 'auto', border: '1px solid #8C8C8C', background: '#F2F5F9', elevation: 0 }} >
            <Table>
                <TableHead>
                    <TableRow>
                        {tableHeader.map((header, index) => (
                            <TableCell key={index} sx={{ fontSize: '16px', fontFamily: 'Inter', color: '#000000', borderBottom: '1px solid #8C8C8C', }}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {type !=="Invoice" ? data.map((row, rowIndex) => (
                        <TableRow key={rowIndex} sx={{ borderBottom: '1px solid #8C8C8C' }} >
                            <TableCell sx={{ borderBottom: '1px solid #8C8C8C' }}>
                                <div style={{ display: 'flex', flexDirection: 'row',marginBottom:'-15px' }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={row.image}
                                        sx={{ width: 50, height: 50 }}
                                    />
                                    <div style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8%' }}>
                                            <NameDashboard >{row.name}</NameDashboard>
                                            <EmailDashboard>{row.email}</EmailDashboard>
                                        </div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #8C8C8C' }}><DateDashboard>{row.DATE}</DateDashboard></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #8C8C8C',}}><BackAction style={{ backgroundColor: row.TAGS === 'PENDING' ? '#FBA20A' : row.TAGS === 'ACCEPTED' ? '#04AE1B' : '#FF0000' }}><ActionText>{row.TAGS}</ActionText></BackAction></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #8C8C8C' }}><BackView>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>

                                    <RemoveRedEyeIcon style={{ fontSize: '15px', color:'#7476D1',margin:'auto' }} />
                                    <ViewText>VIEW</ViewText>
                                </div>
                            </BackView>
                            </TableCell>
                        </TableRow>
                    )) : 
                    invData.map((row, rowIndex) => (
                        <TableRow key={rowIndex} sx={{ borderBottom: '1px solid #8C8C8C' }} >
                            <TableCell sx={{ borderBottom: '1px solid #8C8C8C' }}><DateDashboard>{row.invNo}</DateDashboard></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #8C8C8C' }}>
                                <div style={{ display: 'flex', flexDirection: 'row',marginBottom:'-15px' }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={row.image}
                                        sx={{ width: 50, height: 50 }}
                                    />
                                    <div style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8%' }}>
                                            <NameDashboard >{row.name}</NameDashboard>
                                            <EmailDashboard>{row.email}</EmailDashboard>
                                        </div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #8C8C8C' }}><DateDashboard>{row.AMOUNT}</DateDashboard></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #8C8C8C' }}><DateDashboard>{row.DATE}</DateDashboard></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #8C8C8C' }}><BackView>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>

                                    <RemoveRedEyeIcon style={{ fontSize: '15px', color:'#7476D1',margin:'auto' }} />
                                    <ViewText>VIEW</ViewText>
                                </div>
                            </BackView>
                            </TableCell>
                        </TableRow>
                    ))
                    }


                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponentDashboard;
