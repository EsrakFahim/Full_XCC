import React from 'react';
import { Link } from 'react-router-dom';

const OurGallery = ({ data,ClickHandler }) => {
      return (
            <div className="widget instagram">
                  <div className="widget-title">
                        <h3>Our Gallery</h3>
                  </div>
                  <ul className="d-flex">
                        {data?.data?.projects?.slice(0, 6).map((project, pot) => (
                              <li key={pot}>
                                    <Link onClick={()=>ClickHandler()} to={`/project/${project._id}`}>
                                          <img
                                                src={project.coverImage}
                                                alt=""
                                                style={{
                                                      width: '100%',
                                                      aspectRatio: '1.5/1',
                                                      objectFit: 'cover'
                                                }}
                                          />
                                    </Link>
                              </li>
                        ))}
                  </ul>
            </div>
      );
};

export default OurGallery;