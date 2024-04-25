import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Artworktype } from "../utils/types";
import DisplayCard from "../components/DisplayCard";
import { Col, Row, Spinner } from "react-bootstrap";
import CustomPagination from "../components/CustomPagination";
import Search from "../components/Search";
import Filter from "../components/Filter";
import PageContext from "../context/PageContext";

function Home() {
  const [artworks, setArtworks] = useState([]);
  const [artworksToShow, setArtworksToShow] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(0);
  const { page } = useContext(PageContext);

  useEffect(() => {
    setLoading(true);
    fetchData(page, 10);
  }, []);

  const fetchData = (page: number, limit: number) => {
    //fetch data from api for pagination
    axios
      .get(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`)
      .then((response) => {
        setArtworks(response.data.data);
        setArtworksToShow(response.data.data);
        setTotalPages(response.data.pagination.total_pages);

        //getting categorylist for filtering using category
        let categoryList: any = [];
        response.data.data.forEach((element: any) => {
          categoryList.push(...element.category_titles);
        });

        //removing duplicate category from the array
        const uniqueCategories = categoryList.reduce(
          (uniqueArray: any, item: any) => {
            return uniqueArray.includes(item)
              ? uniqueArray
              : [...uniqueArray, item];
          },
          []
        );

        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data: ", error);
      });
  };

  const fetchArtworksByTitle = (title: string) => {
    //fetching data for searching based on title
    setLoading(true);
    axios
      .get(`https://api.artic.edu/api/v1/artworks/search?q=${title}`)
      .then((response) => {
        setArtworks(response.data.data);
        setArtworksToShow(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching artworks by title: ", error);
      });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchData(page, 10);
  };

  const handleSelection = (category: string) => {
    //filtering artworks based on categories and setting artworks with the filtered artwork
    const filteredData = artworks.filter((i: any) => {
      return i.category_titles?.includes(category);
    });
    setArtworksToShow(filteredData);
  };

  const handleSearch = (searchTitle: string) => {
    if (searchTitle !== "") {
      fetchArtworksByTitle(searchTitle);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Row className="mb-3">
            <Col md={10} sm={12}>
              {" "}
              <Search onSearch={handleSearch} />{" "}
            </Col>
            <Col md={2} sm={12}>
              {" "}
              <Filter
                categories={categories}
                handleSelection={handleSelection}
              />{" "}
            </Col>
          </Row>
          <Row>
            {artworksToShow.length > 0 &&
              artworksToShow.map((artwork: Artworktype) => (
                <Col md={4} lg={4} sm={12} key={artwork.id}>
                  <DisplayCard {...artwork} page={currentPage} />
                </Col>
              ))}
          </Row>
          <Row>
            <CustomPagination
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Row>
        </>
      )}
    </>
  );
}

export default Home;
