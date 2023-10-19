import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { apiService } from '../api.service';

const Filters = ({ selectedCategory, SetCategoryFilter, selectedSort, SetSortFilter }) => {
    const [categories, setCategories] = useState([])
    const GetCategoriesData = () => {
        apiService.GetAllCategories()
            .then((res) => {
                setCategories(res);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    useEffect(() => {
        GetCategoriesData();
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
            <FormControl sx={{ m: 1, minWidth: { xs: 150, sm: 200 } }}>
                <InputLabel>Category</InputLabel>
                <Select
                    id="simple-select"
                    value={selectedCategory}
                    label="Category"
                    onChange={(e) => SetCategoryFilter(e.target.value)}
                >
                    <MenuItem key={-1} value={"none"}>None</MenuItem>
                    {categories?.map((val, index) => (
                        <MenuItem key={index} value={val}>{val}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: { xs: 150, sm: 200 } }}>
                <InputLabel>Sort</InputLabel>
                <Select
                    label="Sort"
                    value={selectedSort}
                    onChange={(e) => SetSortFilter(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value='none'>None</MenuItem>
                    <MenuItem value='asc'>Ascending</MenuItem>
                    <MenuItem value='desc'>Descending</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Filters