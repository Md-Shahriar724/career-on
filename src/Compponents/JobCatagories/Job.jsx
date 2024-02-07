

const Job = ({job}) => {
    const{id, logo, category_name, availability } =job;
    console.log(logo)
    return (
        <div>
            <section>
                <div>
                    <img src={logo} alt=""  />
                    <p>{availability}</p>
                    <p>{category_name}</p>
                </div>
            </section>
        </div>
    );
};

export default Job;