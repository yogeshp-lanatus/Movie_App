import { Box, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import movies from "../Movies";
import { useState } from "react";

// Styled components for reuse
const StyledBox = styled(Box)(({ theme }) => ({
  height: 500,
  width: "100vw",
  padding: theme.spacing(2),
  marginTop: theme.spacing(6),
}));

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  boxShadow: 2,
  borderRadius: 2,
}));

export function EditPage() {
  const [rows, setRows] = useState(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) return JSON.parse(storedMovies);
    localStorage.setItem("movies", JSON.stringify(movies));
    return movies;
  });

  const setRowsAndPersist = (updatedRows) => {
    setRows(updatedRows);
    localStorage.setItem("movies", JSON.stringify(updatedRows));
  };

  const handleRowUpdate = (newRow) => {
    const updatedRows = rows.map((row) =>
      row.id === newRow.id ? newRow : row,
    );
    setRowsAndPersist(updatedRows);
    return newRow;
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Movie Name", minWidth: 150, editable: true },
    {
      field: "description",
      headerName: "Description",
      width: 250,
      editable: true,
    },
    { field: "duration", headerName: "Duration", width: 100, editable: true },
    {
      field: "releaseDate",
      headerName: "Release Date",
      width: 100,
      editable: true,
      type: "date",
      valueGetter: (value) => value && new Date(value),
    },
    { field: "cast", headerName: "Cast", width: 250, editable: true },
    { field: "director", headerName: "Director", width: 150, editable: true },
    { field: "producer", headerName: "Producer", width: 150, editable: true },
    { field: "rating", headerName: "Rating", width: 70, editable: true },
    {
      field: "officialUrl",
      headerName: "Trailer Url",
      width: 200,
      editable: true,
    },
    { field: "image", headerName: "Image Url", width: 200, editable: true },
  ];

  return (
    <StyledBox id="edit">
      <StyledDataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        disableRowSelectionOnClick
        processRowUpdate={handleRowUpdate}
        experimentalFeatures={{ newEditingApi: true }}
        showToolbar
      />
    </StyledBox>
  );
}
