import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

export const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                "&:last-child td, &:last-child td": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const tableData = [
    {
        id: 1,
        first_name: "Chester",
        last_name: "Melchior",
        email: "cmelchior0@slashdot.org",
        gender: "Male",
        ip_address: "112.236.181.196",
    },
    {
        id: 2,
        first_name: "Brenda",
        last_name: "Tasseler",
        email: "btasseler1@eventbrite.com",
        gender: "Female",
        ip_address: "122.84.168.170",
    },
    {
        id: 3,
        first_name: "Powell",
        last_name: "Bellham",
        email: "pbellham2@wikia.com",
        gender: "Male",
        ip_address: "65.92.66.66",
    },
    {
        id: 4,
        first_name: "Aube",
        last_name: "Carefull",
        email: "acarefull3@nih.gov",
        gender: "Male",
        ip_address: "48.244.110.224",
    },
    {
        id: 5,
        first_name: "Giorgio",
        last_name: "Miroy",
        email: "gmiroy4@amazon.com",
        gender: "Male",
        ip_address: "74.128.123.125",
    },
    {
        id: 6,
        first_name: "Gerrilee",
        last_name: "Lakenden",
        email: "glakenden5@apache.org",
        gender: "Female",
        ip_address: "14.182.9.122",
    },
    {
        id: 7,
        first_name: "Waylon",
        last_name: "Kix",
        email: "wkix6@netvibes.com",
        gender: "Male",
        ip_address: "215.34.23.176",
    },
    {
        id: 8,
        first_name: "Jim",
        last_name: "Nowland",
        email: "jnowland7@163.com",
        gender: "Male",
        ip_address: "157.218.26.208",
    },
    {
        id: 9,
        first_name: "Leonidas",
        last_name: "Karlicek",
        email: "lkarlicek8@wp.com",
        gender: "Male",
        ip_address: "47.83.78.65",
    },
    {
        id: 10,
        first_name: "Annelise",
        last_name: "Sommer",
        email: "asommer9@g.co",
        gender: "Female",
        ip_address: "80.156.181.102",
    },
];
