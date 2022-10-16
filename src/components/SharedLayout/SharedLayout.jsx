import { NavBar } from "components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";


export default function SharedLayout() {
  return (
        <>
            <NavBar />
            <Suspense fallback={<div>Loading...</div>}> <Outlet /> </Suspense> 
        </>
  )
}