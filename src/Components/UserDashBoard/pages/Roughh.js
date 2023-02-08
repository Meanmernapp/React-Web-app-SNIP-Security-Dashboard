import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'

const Roughh = () => {
    const [check, setCheck] = useState();
    const [checked, setChecked] = useState();

    return (
        <Accordion>
            <div className='row mt-5'>
                {
                    [1, 2, 3, 4, 5].map((item, index) => (
                        item % 2 !== 0 ?
                            <div className="col-6">
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header>
                                        <div
                                            style={{
                                                width: "1rem",
                                                height: "1rem",
                                                backgroundColor: "red"
                                            }}
                                            onClick={() => setCheck(index)}
                                        >{">"}</div>
                                        <div style={{ display: check !== index ? "block" : "none" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sapiente aut nihil enim expedita voluptatum architecto, eveniet laboriosam eius ut quibusdam ipsam odit nesciunt sequi facilis temporibus laborum quisquam dignissimos.
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div> :
                            <div className="col-6">
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header>
                                        <div
                                            style={{
                                                width: "1rem",
                                                height: "1rem",
                                                backgroundColor: "red"
                                            }}
                                            onClick={() => setChecked(index)}
                                        >{">"}</div>
                                        <div style={{ display: checked !== index ? "block" : 'none'}}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sapiente aut nihil enim expedita voluptatum architecto, eveniet laboriosam eius ut quibusdam ipsam odit nesciunt sequi facilis temporibus laborum quisquam dignissimos.
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                    ))
                }
            </div>
        </Accordion>
    )
}

export default Roughh