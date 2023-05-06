import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";


const SearchBar = ({styles, salesLogic}) => {
    return (
        <div className={styles.filters}>
            <div className={styles.search_bar}>
                <TextField
                className={styles.input}
                fullWidth
                size="small"
                placeholder="Search by keyword..."
                value={salesLogic.saleSearchQueryParams?.keyword}
                onInput={(e) => salesLogic?.handleField(e, 'keyword')}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon className={styles.searchIcon} />
                    </InputAdornment>
                    ),
                }}/>
            </div>
            <div className={styles.select_bar}>
                <TextField
                select
                className={styles.input}
                fullWidth
                size="small"
                displayEmpty
                value={salesLogic.saleSearchQueryParams?.active}
                onChange={(e) => salesLogic?.handleField(e, 'active')}>
                    {
                        [
                            {
                                name: 'Status',
                                value: ' '
                            },
                            {
                                name: 'Active',
                                value: true
                            },
                            {
                                name: 'Inactive',
                                value: false
                            }
                        ].map((i, index) => (
                            <MenuItem
                            key={index} 
                            value={i.value}>
                                {i.name}
                            </MenuItem>
                        ))
                    }
                </TextField>
            </div>
        </div>
    );
}
 
export default SearchBar;