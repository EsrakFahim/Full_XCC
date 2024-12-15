import React from 'react'

const SectionTitle3 = (props) => {
    // console.log(props)
    return (
        <div className="row">
            <div className="wpo-section-title-s3">
                <span>{props.subTitle}</span>
                <h2
                    style={{
                        color: props.black ? "" : "#333",
                    }}
                >{props.MainTitle}</h2>
            </div>
        </div >
    )
}

export default SectionTitle3;