import { AuthUserContext, withAuthorization } from '../Signin/Session';
import React, { Component } from "react";
import Nav from "../../components/Nav";
import Card from "../../components/admin/card";
import SignOutButton from '../Signin/SignOut';

import "./style.css";

class Admin extends Component {


  render() {
    return (
      <div className="adminDashboard">
        <Nav 
        home="/admin/dashboard"
        // firstPage="/admin/view/registered/users"
        // firstPageName="Users"
        secondPage="/admin/view/registered/trucks"
        secondPageName="Trucks"
        thirdPage="/admin/view/applications/open"
        thirdPageName="Open Applications"
        signOut={<SignOutButton />}/>

        <div className="container adminPage">
          <Card
            image="https://previews.123rf.com/images/jemastock/jemastock1710/jemastock171011501/88358216-food-truck-icon-image-vector-illustration-design-black-and-white.jpg"
            title="Registered Trucks"
            number={20}
            icon="fa-truck"
            buttonText="View Trucks"
            imageClass="truckImg"
            link="/admin/view/registered/trucks"

          />
          {/* <Card
            image="https://cdn0.iconfinder.com/data/icons/glyph-user-group-icon-set-1-ibrandify/512/40-512.png"
            title="Registered Users"
            number={10}
            icon="fa-user"
            buttonText="View Users"
            imageClass="userImg"
            link="/admin/view/registered/users"
          /> */}
          <Card
            image="data:image/png;base64,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"
            title="Open Applications"
            number={5}
            icon="fa-clipboard"
            buttonText="Open Applications"
            imageClass="openImg"
            link="/admin/view/applications/open"
          />
          <Card
            image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIWFhUXGBYYFhcYFx0XFxgXGBUXFxcWFhcYHyggGBolHRcVITIhJSkrLi4uFx8zODMsOCgtLisBCgoKDg0OGxAQGyslICUtLTUtLS0tLy4yLTItNy0tLy8tLS8vLjcvNS0tLS0tLS0tLjAtLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUGBwj/xABEEAABAwIEAgcECAMHAwUAAAABAAIDBBEFEiExBkETIjJRYXGBB0KRoSMzUmKSorHBFHKyFUNTY9Hh8BckghY0o8Lx/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEDAgQFBgf/xAA+EQACAQMBBAgEBAUDAwUAAAAAAQIDBBEhBRIxQRNRYXGBkaHwIjKxwQYUI9EVM1Ji4UKi8YKSshYkNENy/9oADAMBAAIRAxEAPwD3FAEAQFC4BAVQBAEAQBAEAQBAEAQBAEAQBAEAQBAUJQAFAVQBAEAQBAEAQBAEAQBAEBQlAWwdUBdQBAEAQBAEAQEblAAe9ASQBAEAQBAEAQBAW3u+CAm3ZAVQBAEAQBAEBEnuQFLnmgJhAEAQFHFAWygJtagJIAgCAIAgCAi7kgLL6qMEhz2A+LgEBQ1bLdtn4ggJtqGfbb+IIC41wOxB8kBJAEAQBAEBbcboCrGoCaAoSgPOuMfalFTkx0oEsg0Lyfo2nwtq/wCQ81GScHmOI+0jEJCSap7fBlmAfhF0JJ4X7Ta+JwP8QXjm2SzwfU6/AoD13gb2gw130bwIp7dm/Vf35Cef3T80Iwdm7ZSQUQFAe5AVYEBJACgLVz/sgJtbZASQBAEAQBAEAQFCEB4/jvs5nZK6eB7Z2OfJI+Eixu4ud1WkkONzuCD5rDJkefYhOXvIkaY3NNujeLWPdcgWPg4AqSTGLLaEW8wgMnD66SB4fDI6Nw5sOU+RtuPAoD0bhz2svbZlbHnH+LGAHebmbHzFvJTkjB6Zg+N09UzPTytkHMA9Zvg5p1afMKTE2CAIC25yAq1qAmgCA8i9onGj5nPpaR1o26Sy37R+yCOX6qDJI8drXEOIzXtzCgGI4qQQzWQg2WGVzo3texxa5pBBBsQQbghCT6j4TxgVdJFPzc3rgcntNnfMX8iFJibW9t0BVoQEkAQBAUDUBVAEAQBAEAQBAEAKA4TEamuo5XyfXwOcXW95gJvlHcBtzGnJacnUg88Ud6jCyuqcab+CaWM8n/z4eJOdmHYsy0rR0lrA6MmZ5H3h4at8FZCrGfA0bvZ9e2fxrTrXD33nAcS+zaqpgX0//cwjWwB6Ro/kGv4L3+yFYaRxLXgm2oO2U737gdj+vgpyCV1IL1JVPicHxPcx42c0lrh6hAehcOe1eVlmVjOlb/iMAbIPEt0a70y+qnJGD0/A+IKarbmp5Wv727Pb/Mw6hSYmzLUBVAEB5x7VOOG07HUsLvpXC0hB7DTy/mP6KGSkeEy177FocQCb6c/G+/JQSYjQToFIKyR253QFpzUBdpxqgR9E+xYn+zzfbpX28srD+t0RDO+UkBAEAQBAEAQBAEAQBAEAQBAEBzfGr3tpJnRuLXNym43tnbf5XWvWbUXg6OzIwncwjUWU86PuZ5hHWxyH6U9HJf6+PSx75Gj+ptitJNS+bR9Z6l0atBPoPjjzg9fJ/ZnWU3EVVRkNqm9JEezK3XTlrsfWx81eqk6fzarrOS7K1vdbd7sv6X7/AH8DNxTh/DsVYXizZD/ex2a+/ISNPa/8hfuIV8ZqSyji17WrQlu1Fg8x4n4CrKK7svTwj+8Zclo+83VzPzNHerEyg5eOYHb4c/8Af0Ugut+SAuQ1DmOD2OcxzeyWktcPIjVAd9w57VKiKzKpvTs+0LNlH/1f62PipyRg7d3tOw4NDukftt0brjwN9L+qZIwcXxX7WZHtLKRnRA6dI7V9vugaN89UyTg8lrahzyS4kkm5JNyT4lQSYjXcj/8AikgntugKlxOwQE46YnUnRAZtLTXIsFAPozginFNRxRHtWzP/AJnG5HpoPRZEM6Nk6EF0PQEgUBVAEAQBAEAQBAEAQBAEAQGj4tZelqB/lvPwbf8AZUVl8LN7Z8sXNN/3I8zwOhbJRVpI60b2yNPMfRtzDyIaVqRWaT7D0VerKltGnjhJJP1++DFjx2YQRRh/1TpGEEAtc3qOYHA7gBxb6LHpJKKwXqwoyr1XJcd1prRrOc48VknSVDHOD4X/AMNNy1+id5O93yOiJpvTRk1I1acd2rHpaf8AuXeufetTrcL40kicIq2MsdyeBoR3kD9W39FdGs4vE0cmtsqnWj0lpLK6nxXvtx4lcf4EoMQb0sJEMjtRJHYsce9zBoT4ix8Vsxknqjh1KU6cnGSwzyrifhOsoTeaPNFsJWdZnhd3unbtAeBKyyYGlbJz/wCevcpBMFASBQEJIgfDy/0QGunpnA7eo2QEBSd6kgushA5ICYi79v8AmygEgRew9AEB1nC+FWcJZNCNWt8e93+ikhs9GwvEHHS6kg6ijnugNlE5AZDSgJICSAIAgCAIAgCAIAgCAIDleL8Z6F3RyRu6GWNzTKNQ1zgW2c0Dusf2WtWnuvDWj5nV2dadN8cJLfi093rS6jz2grHUsdRG5oc2ojyte03bcBzcwPvCzttxZaqk4Ra6z0VShC6rQqxeHBrKa16/fI0rYjZzuWYN9ctz8i1YNfDk24yX5iUf7Y/WR1uD0FJV08cRPR1LGBptoXZRa9tnj5+SvW5VWOZxKkrzZ83Jawb8P3T96mFAXx1LKKQ9LEHMhs8bAR6OYRqHaBQm3U3HwMqkIxs1dU/hnxyn1vn1m6rcAqKRxlopCRzjPP0OjvkfFZOlKGsH4FVLaVC5j0d3Hukvenquw2OC8bxv+iqW9G7Yh3YPgb9nyKmFdcJaMputjTiukoPfj2cf8+Hka/iP2YUtReWjcKeU65RrC7b3R2L/AHdNeyVspnFaa4nlWPYDU0T8tVEY7mzXjrRv8iNCdzYWP3VOSDXh/M7ciNRfuvyPgdVIJ3QFboC2+EHmR5ICAoQdnn1t8lJjqX48LJ0JNu7uUjJt8OwctPVb6/7oQdRh+ESHwQHWYXhZagOmpKeyA2UUaAvhqAkgCAIAgCAIAgCAIAgCAIDCxWiMrC0Ft/vNDmkfZcO4qGk+JlGTi8p4Z53iHD74nHoGhpOrqeTrRyW5xuOh8tHDyWpOi46w8juUNqQrJQuuK4TWjXfj32czAxWojngZFFF0U0byXw7E3aQcl7Zjtpv4Kqct9YSw1yOhaUXa1ZVZy3oSWk/3447+HaYWHUFPPEyISGCpaMuY9l7hsRr1X/A371ilCenBltWpdWrlJLpKbz3pP7encXK12TE2Z3dmVmYnbSIXJWX/ANxS05bLSS1aX/kS4s4iNS/KwkRNPV5FxHvn9gsKtXeenA29m7OjbwzNJyfHnjs/csRYmySBoqWGR2eRokBAe1jctv5jd3PuWblFxW/qa0LerG4qflpKKWPhfB5+nvgbDD5qqlY2Wmf09M7UC2wvr1d2keGneExOnrHVGM6lpeSdOutyotM9vfwfj5nV4RxVTVjDDK1t3CzopACHeAvo4K6nWjI5N5smtb/Fxj1r79XvU5riT2URvvJh8nRuIN4XkmM87Ncblo8Dmbtsr8nLPLsUw2amk6KoidC/kHC7HDvaRfTxaXDwCyyDHz7X0vsdwfIjQoC43x2QFXO+CAz8MxZ0RF2h7fsu/Z24+fkpIaPSuFsUo6ghjXCOQ/3b9CT9w7O8t/BSRg7eDCgOSEGbHRAIDJZEAgLoCAqgCAIAgCAIAgCAIAgCAIAgCAsVlKyRuWRoI8f1B5FAclxFwwHDrgyNHZkb9czz/wARvnr5qqpRjM3bO/q2r+B6c0+DOJxagcwXmHSRnRtQzUjlaQHtHwdY+J2WlUg4/P5npLK6hU1tniXOD4f9L5fTsRq66A5mnN0oIYGyb5yGNad7kOuCLHVYSjl6G7b1YwpfqfC1ltPlq37a0NrX8PGCk6aTtuc0W+yDc289FZOmoU+059pfyur3C0ik8Ly1ZpbfQR+L5z+do/ZVz+WJv2v8+t3x+hcjqnxsgcx7mkRA6HTrPedtlM5NNNPkiq0oU6tOoqkU05y95Ml1RBUfXDoZeUzB1Sf8xn7/AKJmE/m0fWTGlc2izQe/D+l8V3P33M3dHj1XRW6X6aHk8G+nLK/9nfFZ706fHVGnK1s79vo/gnzT+6+68jr6fE6PEYjHI1krTvG8dYeNtwfvD4rYhVUuBwbqwrWzxNadfJnC8S+ydzc0mHyZm7mCQi58GPdo7uAfr95W5NM82q4XxPMcrHQyN3jeCBvuL6gHXXUHvWRBHNY2Isf18QdiPEICV0BdpoXSODWi9/khJ9McOxPbSwNkcXPEUYc46knKNzzKyMGbGyAWQFUABQBAEAKAjc9yAqCgKoAgCAIAgCAIAgLTzdAXUBqMSwQOu6OzXntAi7H+D28/PdQ0nxJjJxeUcHX8PvikzU/0Mu/RON45Lf4bjof5Tr5LVnRcXvQO5Q2nTrRVK8WV/VzXv2mWccx41NOYHxmOdr2ksOgda4OW/PUdU+l1TOpvx3WtTftLKNrW6eMt6m09Vy7/AN/PBzFQwthhBBBtKbEWOsz+R8lXUWke46Fm06laS/q+yLVYw9HEOf8ADxfEsv8AuoqcfBGWz/5T/wD1L6nX4Vh9JWU8bAckzGNaeTuqANvfb/zRbH6dVdpw3K82dPXWLfev8P3qYU8UuGxPzua9skjQ0ZS5oaGuLjlJFr6X39Vi/wBGHiX01Haly5JOOI9eue8wI6SCY56V/wDDzDXJciNx72Hdv/NFXuwnrB4ZvO4ubWO7cx6Sn18139fj5m+wzjGopnCOtYfB43t39zx5fNWRrShpNGlV2Vb3Ueks5eD95Xj5nU1UFDicQErGSt5OGj2Ejk4dZhWzGalqmeer21ShLdmmmeacVey+ema6SkeJ4Bdzo326Ro7xs19u8ZXeasTKDz6KUOLQwHraW3HhZ25HmPUrIHfcMYOM8cfvPc0E+BOvyuoJPdmuWRgTQBAQe5AIxogJoAgIndAOV0BRyAmgCAIAgCAIAUBbcfggKtb3oCaAICxWUbJW5XtBHj+yA5DiLhoObaRplYBo8fXR+v8AeN8Dr5qqpRjM3LS+rWsswenNcn78zjsSo3xxhsw6en1DJmfWR33Fztr7rtPLZac4yjpLVHorW4pV3vW7UJ84v5Ze+ta9nM1ePQh3WhN4sjGNdzaWxhtnjdrrjn6LCpq95cDcsk4U+gnpPXxy3qutdxtqfC4ZwJKR+WVouYnGxzAbtO9vl5LLcjPWHHqNSV1cWy6K7WYP/Utf+fqZ2NRyPpadtULy9fN56AHTS9lnVXwpSNfZ04qvVnS0jlY7tTR4Nw4+dszonaxuAaOROUFwueev+qwjRzHK4m5cbWdG43KizFpZ60ZuAYqyST+Eqmh8b9GFw7L7bAnUAm9uYPoppz3nuSKL+zlQirq3e61xx1df78jNruEZ6Z3S0Mh/kLrEDuB2cPAqZUHF5pswpbZpV49HeRz2pfbk+1eRtuNsRfFhj3PP0nRa20GfLb+ohbcTzc2s6HiHDkN5Wdzbn4bLMh8T1fgVmapDuTGud6nqj+o/BSYs9NjmUmJkMkQEi/uQFGhAXAEBVAEBFw5oChsgJAICqAw8VxOKnjMkzwxo08SeTWjcnQ6BYzmorMi+3tqtxPo6Sy/fExqDiOkm0jqIyfsl2V34XWPyWMa0JcGW1tn3VHWdNpdeMrzWhtAVYaZVAEBac5ASa1ATQBAEAQBAabEsDDiXxEMedxa7H+D28/PdQ1klNrVHBYrw2Q+8I6Cb/DP1Ug5iMkWN/sH4c1q1KDTzA7lrtZSSp3S3lyfNdv8Anj3nN5csliDBM33SS1pvp1Hbxnuubdx5LVxr1M72+3T49JTfPi13rn9etGdj80zxTCUnPkdmOxsZCBmtpfK0X5LOrnKya2zVSSqyglje08Fyz3nV8AFpp3FvZMj7ehy/stil8iOFtLLuZZ7Dzavn+lfIw7TPc30kJH7LST+PK6z186f/ALXcl/Qvoj3CA3aD3gLpHgDzj22VgbTsiv23sHo0mQ/0BTExfE824b0zO9AskS+J6bwJJZsj/tENHk0X/V3yUowZ3FPVKSDPin7kBlRPugMlhQE0AQBAEBSyAqgCAjJGHCzgCO4i4+aNZJUnF5Ry3E2AYbbPUtZEXutnDjGS7fW2h23IWtVpUeM9DsbPv9o53LduWFwxnTx+xr6fhVzRnw7Enhth1S4Ss9LdUeeUrBUGtaU/ubNTakW929t0314cX+780ZrZcVhzZmxVDRbKB1Xu77u6rW2/lWea0epmu47MrYw5Qb480vDVvzLEXtEiYQ2qpp6d33m3b6Xs4/hWKu0tJpotl+H6k1m3qRmux6/depvcP4jpJj9HURk/ZLsrvwusVdGtTlwZza2zrqj89N468ZXmjcXVppBAEAQBAEAQGPW0TJW5XtBCA5DH+HbttI0yxjZ4+uj8j748Dr5qqpSjNam1a3tW2lvU34cmcViWHyQs1+nptbObo6Pw72W+ybt8lpzpyho9Ueltbujcy3qb3KnVyl77MS7zCpHzRhxppHFhHWDe0L/bZrY/eGniq0pLWD0NypOjOSjcwSkuDfB90tM9z8jEwPBJZZgzK4MzAkkWFgbkeaUacnLL4Dam0KUKDUWnJrGF9T2uEWAHgugeJPE/bTWZ6qKMHRrXOI8yGj+h3xWSEXqcxRGzABuf+BSYnouBtMUbWcxqfMm5WRgzp6CougN3TyXQGyhegMtjkBeaUBJAEAQBAEAQFueUNFz6Abk8gL8yobwTGO88HjWKzVFfXiN0fWD8gizXaxjXde723A07Thz0GwC5c3OrVw14HvraNvYWO/GWjWd7Grb4YT9E+XidFxfwdBTQOqaeR8Low3QPPW61u12sxvvfuV9a3jCO9HTBytmbXr3NZUK8VNSb5cNOrhjTqL/s14lnne+CZxflZna89oAODS1x59oEHfQqbWtKXwyK9vbNo0IxrUljLw1915a+BPF/aJAyZ8Rh6WJuheCDdw7VmuFi0bXvyKmd3FSccZRhbfh6vOjGqp7sny14ctV+xj/x+DVQaHEwubfLq6EMvvYtPRhY79vPs9C78vte0baW+nx4Sz5/EX4OD3tGbD8Se1vJpcJGflOX8pWSt2tacyqe14Se7e26b68Yfrr6l+fEMZhcS6mgnZ/lkg6W11ObX+UqXK4jyT7iuFDZFZYVSUH/AHf4WPVFIfaPE0htVTzU7vFtx6Xs4/hRXcVpNNEy/D1Wa3repGa7Hj916nQYdxRRz26OojJPuk5HfhfY/JXRr05cGcyvs27ofPTffxXmsm3BVpolUAQBAUIQGlxLAgSXwnI876Xa/wAHt5/qoaySng4TFeHfpM0X/b1HJt7RvP8Alu5E/Z+XNatS3w96GjO3abX+Horlb0fX/P17S9g/E/Rv6KsZ0bx79rA+Lu7zGnksI1mniehfX2VGpDpbR70ern77OJ2rJQW5gQRa9xsQthHDkmtGfOvHU/TYhM6/ZLWD0aCfzOcrMGCeMl7AafM/NyZ+vL4b/BSYs7ihN1Jib+iagN5SoDaQIDNiQGQ1ATQBAEBCWUNaXOIDQCSSbAAbknkFDeNSYxcmklls1GHcV0c1hHUMuSQGuORxt3NfYlVxrU5cGb1fZl3Q1nTeOtarzRubq00DyPjjEKqplf8AQzRwwdZoLHDw6Vx+OvIeq5lxKc5PR4XvJ7fY9C1t6S+OLnPR6r/tXvV+BtuCMVw+mhc907encAZeo4EWA6jBluQDzF7kkq23qUoRznXmaO1rXaFzVUVB7i+XVeb10+y0NFxdxK+vkbFC13RB3UYBd8j9g4tHhew5ak+FNas6rxHh9Tp7M2bDZ9N1arW9jV8orq/d+C7blY84bTugaR/FztHSkH6mKxswEe+bnX/RqmT6GO7/AKnx7DClH+J11Wa/Sg/h/ufX3dn7s1nDcMkD46t1HJPE2+XKDlzA2zaA3y2Nr2F+eiqpJxam45RubQnTrwlbRrKEnxz1dXFcfM7GXGMGqnBssbWyOy3Ijc1wcfcMkYvmB03t5rbdS3m8NHAjabXtYuVOTcVnmmsdeHy9TD4koqfCmuNMXfxE7cjMxv0Ud+u9pte50AuTr5FY1YwofJxfoX2FW42rKKr46ODy8abz5J/fH3RrOB+KKgVUMUk73xPJYQ85rEg5SHHUdaw35qq3rTU0m9Dd2xsug7adSnBKS10079OHA9cqWMLT0gaW2ucwBbbne+ll03jGp4eDkpLcznsPPKdmC10giZEWSOLg3Kx0eawJuMvU2BPWC0kreq8JanqJy2xY0+klLMVxy08eevZoZZ4Enh1osQljA912rfykD8pWX5WUfklgo/jlGt/8qhGXatH66+pQVmN0/wBZDFVNHNlg74DKfylN64hxSYdHY9x8k5U31Ph9/qTg9pUTSG1dNNTu8RmHzAd8kV4s4mmiJ/h2pJb1vUjNd+P3XqdFhvFVHPbo6iMk+645HfhfYq+NenLgzl19mXdD+ZTffxXmsm4BVpolUBjV1CyVpa9oIKA5DHeHzlyyMM0XJ397H4td7w8Dr57KudKMlqbVtd1beW9TePv3mLgVI2mpZbTGRhLi0nTKCAMtuRHPbW6rp09xbpde3juqnSNJaJaHhAkdLM99jeRxeB4uc4hvnqFcjTeMI7vBsOytDR6nx5rIrOnoqLwQG+o6dAbanhQGwijQGVG1AX2hASQBAEBbnha9pa9oc07ggEHzB3UNJ6MyjKUHvReH1o0ddwdSvifEyMQh/aMQa0kA3ANwRa+qplbwawtDoUtrXMKiqSlvNcN7L+5oJ+D62AN/gaprQ0EZeszNru5pL4y7ya3dUu3qR/lyOnDa1nXb/N0s556PHdpGXnJlgcRYpB1KqjEzT1cwAaDfTrPZmYAfEAKOmrR0lHJm9n7Mr/Hb1t18cccdyeH5Nj+3sJmHQzRdE0Ov1MwiL+/NARmGp1ItunS0JfC1j32E/kNq0ZdLTlvNrnjex3S4eB02EU1K2Jxw5sBflOUh17nkHvF3WvZbEFBL9PBx7qpczqJXrnjOun0WiPMsZ4Xr2yOknhdNmdme6M5s1zrbL1m93Z09Fz50KqeZLJ7C12pYypqnSmo4WEnpj7Pz1Ouwn2i0rQIpIH0+QBoaBna0AWAsLOH4VswvILRrBwrn8O3Mm6kJqedc8G/t6m+kxPD5I3Vf0Ughs7PlBe13ujUZg47Ad6u36TW/poc1Wt9TqK2+JOWmM6P7Y6zzGkhlxWuJdcBxu+2vRQt2aD38h3kk960EnXqe+B7CpOlsmyxHiuH90nz+/csGT7Q8LFNWNdFaNrmxuYQNGOjszYX2ysPPdTcw3KmhVsO5dxaONTVptPtT19ctG/8AaBxW00sUULgTUMD3kcojy11GY3Hk1yvua+YJLmcvYmypK5lUqLSm8Lv/AMce/BruEY20NHLiMg67xkp2nnc2v/5EX/lZfmq6K6KDqvwNrakpX13Cxg9FrJ++perwabg6OeetaIpZIw5xklLXkXaDd17WuSSBr9pVUFKVTR95v7UlQt7NupFSaWI5S8Md3HwN1jntFnZVyCAsMLDkaHtuHFvadmBB1N7a2sB3q6pdyU3u8Dn2f4eoztoutlSeuj4Z4LHvvNh/1FaAGV1C9l/C4PjkkA/UrP8AN8qkTW/9PSfx2lZPx+6z9gKfAqzRuSJ5sAAXQG55Bp6hPkCmLapw09A6m2rNa5kl3S9eJfHAM8GtFiEsYGzH6tv45Tb8qy/Kyj/Ll799hV/HaNfS6oRl2rj66/7jIbVYvTuaJGNqYr9Z7WN6QDTZrXtud+Ww9FO9Xg9dUVOnsuvFuDcJck28ebTx5mTWcctp3NbWU0sOfNkddkmZoNszg112HUaa781k7ncfxrBVS2NK4i3bVIzxjK1WG+SbWH3m0w/iuin0jqI7n3XHI78L7FWRrU5cGadfZl3Q+em8da1XmsmNxBwjBVMc25aHizspIDhyvbdWmicZTeyERS52zEtGzSNR6jf4IMnT0/DAYLIDMZhVkBkx0dkBkxwIDJZGgLzWoCaAIAgCAIAgCAWQGtrsBppiHSwRuI5lgv6nn5FYSpQlxSNqle3FJYpzkl3mgxXgKJ/WieYni5YQ0DITyHR5SR4G/O1rqidrF8Hg6VvtyrT0qLeT4ptvPnn0x2mpNHjVL9XIKhg5Eh/xz5X/AAcVVu3EODyb3S7Guvni4Py+mV5pEP8A1nG8iLE6HL3lzCbDvyPbmGttr7p+ZT0qxJ/g1SmuksK+e549U8eeC48YXVwNpoak0zQ8vyHqZnn7XS9u3IB36C0/oVI7sXgwX8TtK7r1ae+8Yzxwuzd4eK+rOl4O4bZRRuAeJHvN3SWtcDsAC5sAPHclbFCiqa01OTtPaM72om1hLguOOvzNJ7XKHNTRzDeJ9ifuvFj+YMVN5HMFLqOj+Gq+5cSpf1L1X+MnnXDeFOq6iOEE2Or3b5Y29oju3sPFwWjSh0klE9Vf3cbOhKq+PJdbfD932I6D2mVjjLHC1hbTwtyx27D3Ws7KRocoAb3jXvV93J5UeSOX+H6MVTlVbzUk9etLlnv49unUZFA7+z8MdOdKirs2PvayxykeTS5/m5qmP6VHe5sprL+IbSVHjTpavtfP108GcjgGHzSygwQdMYsshaezYEWDtRe55DU6rWpxlJ5is4O7e3FGnTxWnu72Vnn9Gehj2ihp6OuoZI7+FweR6sgbp6lb35vlUjg8q/w+5LftKyl761n7G0wjCsMqstVBCB0b73DXRAPbZ2rdGm2h2KshCjP44rgad1dbRtk7etN/EutS0enHVnmeM8STSVU1RFM+ME9TK4tuxpDWiwNuzr8Vz6laTm5JnrrXZtKnbQo1IJ9eUuLy366HX/2xjNJGJZ42zxZWuLja7AQCQ7JYi3MkEDvW10lxTWZLKOH+U2Rd1OjpScJZxz17s5Xdr4G/4a4wpq/6GSMMlsT0b7Oa625YSLO8iAVdSrwq6Pic2/2TcWH6kXmP9S0x39X0L2I8AUEv9wGHvjJZ+UdX5KZWtKXIrobcvqX+vPfr68fUwcI4FfSzxyQVknRNdd0Tr2cCCCDlIaTrfs76rGFs4STjLTqNi621C6oyhVpLefCS5eeX6nbLaOCUIQFCwICnRhAAxASAQFUAQBAEAQBAEAQBAEAQBAW5oGvBa9oc0gggi4IO4IO4UNZ0ZlGUovei8PsOZxPgCil2jMR74zlH4TdvyVErWnLlg61Db17S/wBW8v7tfXj6mgfwDWU5zUVYQPskmP8Apu13qAqPytSHySOmtu2lxpdUfFYf7NeDLZ4kxel/9zS9KwbuDf1fFdo9WqOmr0/mjn32GX8O2VdfyKu6+rP2lh+TMzA+OMPc8kw/w0kgDXSANsfORuuneQOSzp3NJvhhmvebDvoQSU+kjHVLX6P6Jlp/s8pHzAR1TiA5rpIXEOJabHcWIzD3jdR+Ug5aPwM1+ILqFLM6a1TSkk1r6rTq0MT2j4DWzzh8cOeGNobGGEEjm4lmhuTYaX0aFjdUqkpZS0L9hX1lb0XGc8Tk8vK8tferZruC+J48OD4qimla97gXOsA6wFg0sflsBqdz2iq6FZUdJI29q7NntFxqUakWktFy78rPHuPQ4uJ6KUmN8rGu0BjmHRm520kADr+F91vKtTlo35nlpbNu6S6SMW11x1+nA1vHVXHR4e5kDWx9LeNgYAB17l7gB93Nr3kLC4kqdLEeZtbIpVLu+Uqrb3dXnXhw49p5jwVhX8RWQxkXaDnf/IzUj1Nh6rnUIb80j2G1rr8taTmuL0Xe/wBuJ7zVkBjswuMpuO8W1C7L4HzaCe8sdZ844dO5kkb4+217C23eHCw/ZcKDakmj6rXhGdOUJ8Gnk+kwu8fKCqAIAgCAIAgCAIAgCAIAgBKAtO1I80BdQBAEAQBAEAQES5AA5AazE+HKWov00DHE+9az/wAbbO+arlShLijbt7+5t/5U2uzl5PQ5vFvZzG9rRBUSxBnZaXGRg1OoBILTrbQ/qb0TtE18LaOtbfiCpCTdWnGWeLwk/pr5GtdheM0jR0UxnAcercPGW2h+ls8H7o+Kr3LinweTaVzsi7l+pDc046rXw08WWv8AqC9v0WI0Pn1SP/jlGvxUfmnwqR9+Jn/AIS/Usq3r94/sTkosDqhma/oLuy3zGIXFj2X3aBYjkN1O7bz7PQxVfbVq91rf06t71WvqbXjfhR9ayN1PKy0YsxmzLHtEOF9dGActCrK9F1Et18DS2TtSFlOUa0X8XF8/LzyclgsNdhUj5HURkDhlLhd1mg30fHfKDpuOQWtTVSg87p3LudltSEYKtu41xw808Zx2Mt8Ve0KWqiMDYhC131nXzOcB7t7DKL79/wAVFW6c1u4wZbP2BTtqnSylvNcNMLv4vPYS9n3Cck0zJ5WObCwhzbi3SOBu0N5loOpPO1llbUHKW81oYbb2rClSdGm8zejxyXPxPZmDRdM8KVQBAEAQBAEBRzkBTMgJIAgCAFAWnOugJNb3oCaAIAgCAIAgIuQABAUJ+KAkEBVAEBanp2PaWvY1zTuHAOB9CoaT4mUJyg96LafYczins+oZbkRGJx5xHL+U3b8lRK1py5Y7jr2+3r2jpvby/u19ePqc5L7OaqA5qKsI12JdEfUsuHeoCodpOOsJHUj+ILaut26pZ8n9cNeZGPH8YpD/ANzTmZmvWDA47G3Xi0AvbVw2UKrXp/Ms++wSsNk3a/Qnuvqz9pfZmypPaFRyBr5oXMdpmJY14b4gg5st765VYrqm9ZI06uwLuEnCnNNd7Wft6nY0lZHIxr2u6j+yT1Sd9LO1voVtKSayjhVKU6cnCS1XH2jMCyKyqAIAgCAICjigIgICvmgDEBJAEBac74ICTW96AmgCAIAgCAIAgIuCAoUBUBASQBAEAQBAEBBzkBrK/AKaf62CN3jlAd+Ia8ysJUoS4o2qN7cUf5c2vHTyNFiXATXBgiqZQ2N4eyKX6aEOHLKbG1ri1zue8qiVtng346nSobblByc6cctYco/DLzX7FOGsAr4Z3Geqc6LQtDHAx76scx4uwW2DNrbpSpVIy+J6E399ZVqSVGmlLm2te9NPX/q8jtFtHCCAIAgCAoQgIjxQBoQE0AQBAQDEBNAEAQBAEAQBAEAQFMqAqgCAIAgCAIAgIFiAmgCAIAgCAIAgCAIChCAqgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAID/2Q=="
            title="Denied Applications"
            number={3}
            icon="fa-thumbs-down"
            buttonText="View Denied"
            imageClass="deniedImg"
            link="/admin/view/applications/denied"
          />
          <Card
            image="https://static.thenounproject.com/png/59656-200.png"
            title="Approved Applications"
            number={5}
            icon="fa-thumbs-up"
            buttonText="View Approved"
            imageClass="approvedImg"
            link="/admin/view/applications/approved"
          />
        </div>
      </div>)
  }

};

const condition = authUser => !!authUser;
    
export default withAuthorization(condition)(Admin);