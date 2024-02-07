

const Job = ({job}) => {
    const{id, logo, category_name, availability } =job;
    console.log(logo)
    return (
        <div>
            <section>
                <div className=" border border-gray-400 rounded-xl">
                    <div className="p-6">
                    <img className="text-center" src={logo} alt=""  />
                    <p className="text-lg font-bold my-2">{availability}</p>
                    <p>{category_name}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Job;