import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "./ProductContext";
import PageNavigation from "./components/PageNavigation";
import FormatePrice from "./Helper/FormatePrice";
// import { Star } from "@mui/icons-material";
import MyImage from "./components/MyImage";
import { Box, Container, Typography } from "@mui/material";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./Helper/Star";
import AddToCart from "./components/AddToCart";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";
const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { getSingleproduct, isSingleLoading, singleproduct } =
    useProductContext();
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleproduct;
  console.log(name);
  // console.log(id);
  console.log(company);
  useEffect(() => {
    getSingleproduct(`${API}?id=${id}`);
  }, []);

  return (
    <Box>
      <Box marginBottom="10px">
        <PageNavigation title={name} />
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Box>
          <MyImage image={image} />
        </Box>
        <Box>
          <Typography variant="h3">{name}</Typography>
          <Star stars={stars} reviews={reviews} style={{ color: "orange" }} />
          <Typography variant="h5">
            MRP :
            <del>
              <FormatePrice price={price + 250000} />
            </del>
          </Typography>
          <Typography variant="h4" sx={{ color: "rgb(98 84 243)" }}>
            Deal of the Day:
            <FormatePrice price={price} />
          </Typography>
          <Typography
            marginBottom="10px"
            marginTop="10px"
            style={{ fontSize: "14px" }}
          >
            {description}
          </Typography>
          <Box marginBottom="10px" marginTop="10px" sx={{ display: "flex" }}>
            <Box sx={{ marginRight: "20px" }}>
              <TbTruckDelivery fontSize="20px" />
              <Typography>Free Delivery</Typography>
            </Box>
            <Box sx={{ marginRight: "20px" }}>
              <TbReplace fontSize="20px" />
              <Typography>30 Days Replacement</Typography>
            </Box>
            <Box sx={{ marginRight: "20px" }}>
              <TbTruckDelivery fontSize="20px" />
              <Typography>Fastest Delivery</Typography>
            </Box>
            <Box sx={{ marginRight: "20px" }}>
              <MdSecurity fontSize="20px" />
              <Typography>2 Year's Warranty</Typography>
            </Box>
          </Box>
          <Typography variant="h5">
            Available:
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {stock > 0 ? "In Stock" : "Not Available"}
            </span>
          </Typography>
          <Typography variant="h5">
            ID : <span style={{ fontWeight: "bold" }}> {id} </span>
          </Typography>
          <Typography variant="h5">
            {" "}
            Brand :<span style={{ fontWeight: "bold" }}> {company} </span>
          </Typography>
          <hr />
          <br></br>
          <AddToCart product={singleproduct} />
          
        </Box>
      </Box>
    </Box>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media}) {
    padding: 0 2.4rem;mobile
  }
`;

export default SingleProduct;
