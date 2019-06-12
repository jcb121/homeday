import Link from 'next/link'

function NextPrev() {
  return (
    <div>
      <h2>
      Welcome to the Form to end all forms
      </h2>
      <p>
      this will ask for some info from you. <br/>
      <small>
        I promise that all data gathered will be used for evil
      </small>
      </p>
      <Link href="/step2">
        <a>
          Click here to procceed
        </a>
      </Link>
    </div>
  )    
}

export default NextPrev