import React from 'react'

const Timetables = () => {
  return (
    <div>
    <div className="flex justify-center items-center h-screen">

      <div className="container">
                <div className="timetable-img text-center">
                    <img src="img/content/timetable.png" alt=""/>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr className="bg-light-gray">
                                <th className="text-uppercase">Time
                                </th>
                                <th className="text-uppercase">Monday</th>
                                <th className="text-uppercase">Tuesday</th>
                                <th className="text-uppercase">Wednesday</th>
                                <th className="text-uppercase">Thursday</th>
                                <th className="text-uppercase">Friday</th>
                                <th className="text-uppercase">Saturday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-middle">09:00am</td>
                                <td>
                                    <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Dance</span>
                                    <div className="margin-10px-top font-size14">9:00-10:00</div>
                                    <div className="font-size13 text-light-gray">Dev Web</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                                    <div className="margin-10px-top font-size14">9:00-11:00</div>
                                    <div className="font-size13 text-light-gray">Dev mobile</div>
                                </td>

                                <td>
                                    <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                                    <div className="margin-10px-top font-size14">14-15</div>
                                    <div className="font-size13 text-light-gray">Cour IA</div>
                                </td>
                                <td>
                                    <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Dance</span>
                                    <div className="margin-10px-top font-size14">15-17</div>
                                    <div className="font-size13 text-light-gray">gestion d'entreprise</div>
                                </td>
                                <td>
                                    <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Art</span>
                                    <div className="margin-10px-top font-size14">10-15</div>
                                    <div className="font-size13 text-light-gray">physiaque</div>
                                </td>
                                <td>
                                    <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
                                    <div className="margin-10px-top font-size14">12-14</div>
                                    <div className="font-size13 text-light-gray">Mathématique</div>
                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">10:00am</td>
                                <td>
                                    <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                                    <div className="margin-10px-top font-size14">10:00-11:00</div>
                                    <div className="font-size13 text-light-gray">français</div>
                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td>
                                    <span class="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Art</span>
                                    <div class="margin-10px-top font-size14">08-09:30</div>
                                    <div class="font-size13 text-light-gray">Anglais</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                                    <div className="margin-10px-top font-size14">jour feriée</div>
                                    <div className="font-size13 text-light-gray">Marta Healy</div>
                                </td>
                                <td>
                                    <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
                                    <div className="margin-10px-top font-size14">10:00-11:00</div>
                                    <div className="font-size13 text-light-gray">James Smith</div>
                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">11:00am</td>
                                <td>
                                    <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">12:00pm</td>
                                <td className="bg-light-gray">

                                </td>
                                <td>
                                    <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Art</span>
                                    <div className="margin-10px-top font-size14">12:00-1:00</div>
                                    <div className="font-size13 text-light-gray">hackaton</div>
                                </td>
                                <td>
                                    <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Dance</span>
                                    <div className="margin-10px-top font-size14">12:00-1:00</div>
                                    <div className="font-size13 text-light-gray">Phylosophie</div>
                                </td>
                                <td>
                                    <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                                    <div className="margin-10px-top font-size14">12:00-1:00</div>
                                    <div className="font-size13 text-light-gray">Math</div>
                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                                    <div className="margin-10px-top font-size14">12:00-1:00</div>
                                    <div className="font-size13 text-light-gray">Audit</div>
                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">01:00pm</td>
                                <td>
                                    <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">Devops</div>
                                </td>
                                <td>
                                    <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">Deep learning</div>
                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td>
                                    <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">BI</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">IA</div>
                                </td>
                                <td>
                                    <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">symphony</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
    </div>

  )
}

export default Timetables
