import React from 'react';
import Table from '../../Components/Table/Table';
import { tbodyT, theadT } from '../../Components/Table/TableItems';
import "./Home.css"

function Home() {

    return (
        <>
            <div className="cont-navbar col-lg-12 bg-dark border border-dark p-3">
                <div className="row">
                    <div className="col-4">
                        <h2 className='ms-3 text-white'>TegIT</h2>
                    </div>
                    <div className="col-8 d-flex justify-content-end">
                        <button className='btn btn-outline-light me-5'>Hisobot</button>
                        <button className='btn btn-outline-light me-5'>Qarz daftar</button>
                        <button className='btn btn-outline-light me-5'>Tozalash</button>
                        <button className='btn btn-danger'>Chiqish</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className='col-12 mt-3 '>
                        <div className="row justify-content-evenly">
                            <div className="col-3">
                                <label htmlFor="" className='ms-2'>Shtrix Kodi</label>
                                <input type="text" className='form-control mt-1' />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className='ms-2'>Mahsulot nomi</label>
                                <input type="text" className='form-control mt-1' />
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <label htmlFor="" className='ms-3'>Qoldgigi:</label>
                                <b className='fs-3 ms-3'>0</b>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <label htmlFor="">Sotilish Narxi:</label>
                                <b className='fs-3 ms-3'>5600</b>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-2 p-3'>
                        <div className="row justify-content-evenly">
                            <div className="col-1">
                                <label htmlFor="">Soni</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-4 ">
                                <label htmlFor="" className='ms-5'>Jami Summa</label>
                                <input type="text" className='form-control ms-5' />
                            </div>
                            <div className="col-5">

                            </div>
                            <div className="col-2">
                                <div className="btn btn-success mt-2">Qo'shish</div>
                                <div className="btn btn-danger mt-2 ms-3">Tozalash</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid mt-5">
                <Table
                    theadT={theadT}
                    tbodyT="Salom"
                />
            </div>
        </>
    )
}

export default Home;