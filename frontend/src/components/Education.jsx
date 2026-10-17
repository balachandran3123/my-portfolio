const items = [
  {
    title: "Master of Computer Science",
    detail: "Specialization in Data Analytics",
    school: "Madurai Kamaraj University, Madurai",
    dates: "2021 – 2023",
  },
  {
    title: "Bachelor of Science in Information Technology",
    detail: "",
    school: "Mannar Thirumalai Naicker College, Madurai",
    dates: "2018 – 2021",
  },
  {
    title: "HSC",
    detail: "Higher Secondary Certificate",
    school: "Government Higher Secondary School, Sholavandan, Madurai",
    dates: "2016 – 2018",
  },
  {
    title: "SSLC",
    detail: "Secondary School Leaving Certificate",
    school: "Government Kallar Higher Secondary School, Chekkanurani, Madurai",
    dates: "2014 – 2016",
  },
];

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <p className="eyebrow">Education</p>
        <h2>Academic background.</h2>
        <div className="edu-grid">
          {items.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">{item.dates}</span>
              <h3>{item.title}</h3>
              {item.detail && <p className="role-meta">{item.detail}</p>}
              <p>{item.school}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
