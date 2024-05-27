"use strict";

document.addEventListener("DOMContentLoaded", function () {
   

    const ordersDataTable = new simpleDatatables.DataTable("#ordersDatatable", {
        columns: [
            // Disable sorting on the first column
            //{ select: [0], sortable: false },
        ],
        perPage: 5,
    });

    // Add Bulk Actions Select & Bootstrap styles to the elements
    // in the header
    ordersDataTable.on("datatable.init", function () {
        const select = document.getElementById("categoryBulkActionOrders");
        const header = document.querySelector(
            ".dataTable-top .dataTable-dropdown"
        );

        header.prepend(select);

        const input = document.querySelector(".dataTable-input");
        input.classList.add("form-control", "form-control-sm");

        const dataTableSelect = document.querySelector(".dataTable-selector");
        dataTableSelect.classList.add("form-select", "form-select-sm");

        const dataTableContainer = document.querySelector(
            ".dataTable-container"
        );
        dataTableContainer.classList.add("border-0");
    });

    // Fade in after init
    ordersDataTable.on("datatable.init", function (args) {
        document
            .getElementById("ordersDatatable")
            .closest(".preload-wrapper")
            .classList.add("opacity-10");
    });

  
});