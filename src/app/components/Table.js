"use client";

import { useState, useEffect } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Handle search filter
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handle category filter
  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.value);
  };
  useEffect(() => {
    const dummyData = Array.from({ length: 90 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      category: i % 2 === 0 ? "Category A" : "Category B",
      price: Math.floor(Math.random() * 100) + 1,
    }));
    setData(dummyData);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    .filter((item) =>
      categoryFilter === "All" ? true : item.category === categoryFilter
    )
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(
    data
      .filter((item) =>
        categoryFilter === "All" ? true : item.category === categoryFilter
      )
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .length / itemsPerPage
  );

  return (
    <div className="data-table">
      <h2>Data Table with Search, Filter, and Pagination</h2>
      <div className="table-data-format">
        <div className="header-top">
          {/* Search Input */}
          <div className="form-handler">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={handleSearch}
            />
          </div>

          {/* Category Filter */}
          <div className="form-handler">
            <select as="select" onChange={handleCategoryFilter}>
              <option value="All">All Categories</option>
              <option value="Category A">Category A</option>
              <option value="Category B">Category B</option>
            </select>
          </div>
        </div>
        {/* Data Table */}
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={i + 1 === currentPage && "active"}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Table;
