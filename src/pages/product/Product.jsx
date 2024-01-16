import React from "react";

function Product() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <td>1</td>
            <td>ABc</td>
            <td>$5.3</td>
            <td>30</td>
            <td></td>
          </tr>
          <tr className="hover">
            <td>1</td>
            <td>ABc</td>
            <td>$5.3</td>
            <td>30</td>
            <td></td>
          </tr>
          <tr className="hover">
            <td>1</td>
            <td>ABc</td>
            <td>$5.3</td>
            <td>30</td>
            <td></td>
          </tr>
          <tr className="hover">
            <td>1</td>
            <td>ABc</td>
            <td>$5.3</td>
            <td>30</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Product;
