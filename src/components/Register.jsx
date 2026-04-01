function Register() {
 return(
        <main className="min-h-screen grid place-items-center py-8 px-4">
          <div className="border border-[#dddddd] rounded-[24px] bg-white p-8 shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
            <h2 className="m-0 text-[1.8rem] text-center">Register</h2>
            <p className="mt-[0.35rem] text-[#3a3a3a] text-center">Use your student account credentials.</p>

            <form className="mt-[1.2rem] grid gap-[0.75rem]">

              <label className="font-semibold text-[0.95rem]" htmlFor="email">Student Name</label>
              <div className="flex flex-col md:flex-row gap-[0.75rem]">
                <input id="fname" type="text" placeholder="First Name" 
                      className="w-full border border-[#cfcfcf] 
                      bg-white text-[#111111] 
                      rounded-[12px] h-[46px] px-[0.9rem] 
                      transition duration-200 ease-in-out
                      focus:border-[#111111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)] focus:outline-none"
                />
                <input id="lname" type="text" placeholder="Last Name" 
                      className="w-full border border-[#cfcfcf] 
                      bg-white text-[#111111] 
                      rounded-[12px] h-[46px] px-[0.9rem] 
                      transition duration-200 ease-in-out
                      focus:border-[#111111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)] focus:outline-none" 
                />
              </div>
              
              <label className="font-semibold text-[0.95rem]" htmlFor="email">Email</label>
              <input 
                  id="email" type="email" placeholder="Enter email"
                  className="w-full border border-[#cfcfcf] 
                  bg-white text-[#111111] 
                  rounded-[12px] h-[46px] px-[0.9rem] 
                  transition duration-200 ease-in-out
                  focus:border-[#111111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)] focus:outline-none" 
              />

              <label className="font-semibold text-[0.95rem]" htmlFor="password">Password</label>
              <input 
                  id="password" type="password" placeholder="Enter password" 
                  className="w-full border border-[#cfcfcf] 
                  bg-white text-[#111111] 
                  rounded-[12px] h-[46px] px-[0.9rem] 
                  transition duration-200 ease-in-out
                  focus:border-[#111111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)] focus:outline-none" 
              />

              <label className="font-semibold text-[0.95rem]" htmlFor="password">Confirm Password</label>
              <input 
                  id="cpassword" type="password" placeholder="Confirm Password" 
                  className="w-full border border-[#cfcfcf] 
                  bg-white text-[#111111] 
                  rounded-[12px] h-[46px] px-[0.9rem] 
                  transition duration-200 ease-in-out
                  focus:border-[#111111] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)] focus:outline-none" 
              />

              <button 
              type="submit"
              className="mt-[0.35rem] border-none h-[46px] 
              rounded-[12px] bg-[#111111] text-white font-bold 
              cursor-pointer transition duration-200 ease-in-out
              hover:opacity-90 hover:-translate-y-[1px]">Register</button>
            </form>

            <div className="mt-[1rem] flex items-center justify-center gap-[1rem]">
              <p className="m-0 text-[#2d2d2d]">
                  Already have an account? <a className="text-[#2563eb] font-bold" href="/login">Login here</a>
              </p>
            </div>
          </div>
        </main>
 );
}
export default Register;