import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <>
        <div class="container-fluid bg-light py-5">
          <div class="col-md-6 m-auto text-center">
            <h1 class="h1">Phản Hồi</h1>
            <p>
              Chúng tôi đọc tất cả phản hồi nhận được thông qua công cụ này
              nhưng không thể trả lời hết toàn bộ những phản hồi đó. Nếu bạn cần
              phản hồi, hãy dùng biểu mẫu liên hệ của chúng tôi.
            </p>
          </div>
        </div>

        <div class="container py-5">
          <div class="row py-5">
            <form class="col-md-9 m-auto" method="post">
              <div class="row">
                <div class="form-group col-md-6 mb-3">
                  <label for="inputname">Name</label>
                  <input
                    type="text"
                    class="form-control mt-1"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="inputemail">Email</label>
                  <input
                    type="email"
                    class="form-control mt-1"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="inputsubject">Subject</label>
                <input
                  type="text"
                  class="form-control mt-1"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div class="mb-3">
                <label for="inputmessage">Message</label>
                <textarea
                  class="form-control mt-1"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="8"
                ></textarea>
              </div>
              <div class="row">
                <div class="col text-end mt-2">
                  <button type="submit" class="btn btn-success btn-lg px-3">
                    Let’s Talk
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Contact;
