import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import AuthorImage from "../images/author_thumbnail.jpg";
import { getAuthorById } from "../services/api";

const Author = () => {
  const { authorId } = useParams();
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await getAuthorById(authorId);
        setSeller(response.data);
      } catch (error) {
        console.error("Error fetching author profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if (authorId) {
      fetchAuthor();
    }
  }, [authorId]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      {loading ? (
                        <div className="author-profile-skeleton">
                          <div className="skeleton author-profile-skeleton-image"></div>
                          <div className="author-profile-skeleton-details">
                            <div className="skeleton author-profile-skeleton-name"></div>
                            <div className="skeleton author-profile-skeleton-username"></div>
                            <div className="skeleton author-profile-skeleton-wallet"></div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <img
                            src={seller?.authorImage || AuthorImage}
                            alt={seller?.authorName || "Author"}
                          />

                          <i className="fa fa-check"></i>

                          <div className="profile_name">
                            <h4>
                              {seller?.authorName || "Monica Lucas"}
                              <span className="profile_username">
                                @{seller?.tag || "monicaaaa"}
                              </span>
                              <span id="wallet" className="profile_wallet">
                                {seller?.address || ""}
                              </span>
                              <button id="btn_copy" title="Copy Text">
                                Copy
                              </button>
                            </h4>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      {loading ? (
                        <div className="skeleton author-profile-skeleton-followers"></div>
                      ) : (
                        <div className="profile_follower">
                          {seller?.followers ?? 0} followers
                        </div>
                      )}
                      <Link to="#" className="btn-main">
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems
                    nftCollection={seller?.nftCollection || []}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
