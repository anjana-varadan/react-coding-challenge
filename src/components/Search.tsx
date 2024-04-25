// Search component
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

interface SearchProps {
    onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <Form onSubmit={handleSearchSubmit}>
            <div className='d-flex'>
                <Form.Control
                    type="text"
                    id="search"
                    placeholder='Search'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <Button type="submit" variant="primary">Search</Button>
            </div>
        </Form>
    );
};

export default Search;
