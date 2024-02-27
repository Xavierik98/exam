import React from 'react'
import {FaGithub} from "react-icons/fa"
import {LuSun} from "react-icons/lu"
import {GoArrowRight} from "react-icons/go"

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav gap-2 align-items-center">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><FaGithub className="fs-6"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><LuSun className="fs-6"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-primary">Contact me <GoArrowRight/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
