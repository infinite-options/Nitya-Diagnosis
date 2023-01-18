export default ({ member, handleClose }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a href="#close" aria-label="Close" className="close" data-target="modal-member" onClick={handleClose}></a>
        <hgroup>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <img style={{ width: "200px" }} src={`images/${member.slug}.svg`} alt={(member.symptom_name)} />
            <hgroup>
              <h2>{member.symptom_uid}</h2>
              <h1>{member.symptom_name}</h1>
              <h2>{member.symptom_description}</h2>
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  );
};
