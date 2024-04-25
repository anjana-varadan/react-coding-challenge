export type Artworktype = {
    id: number,
    title: string,
    thumbnail: {
        lqip: string,
        alt_text: string,
        width: number,
        height: number
    }
    artist_display: string;
    date_display: string;
    main_reference_number: string;
    dimensions: string;
    category_titles: string
}

export type Paginationtype = {
    totalPages: number;
    onPageChange: (page: number) => void;
}

export type FormData = {
    name: string;
    email: string;
    comment: string;
}

export type SearchProps = {
    onSearch: (searchTerm: string) => void;
}