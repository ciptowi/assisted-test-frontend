<template>
    <div class="responsive container mw-50 bg-light border rounded border-3 border-grey p-3 mt-5">
        <div class="text-center">
            <label class="fs-4 w-10 p-1 bg-warning text-light border border-grey rounded"><b>{{ timerCount }}</b></label>
        </div>
        <div class="d-flex flex-row-reverse">
            <RouterLink to="test-end">
            <button class="btn btn-danger text-light"><b>Akhiri Ujian</b></button>
            </RouterLink>
        </div>
        <div class="mb-4 mt-5">
            <label>1. Soal nomor 1 .........................</label>
        </div>
        <div>
            <div class="form-check mb-2">
                <input class="form-check-input mr-1" type="radio" name="a1" id="opt1" value="1">
                <label class="form-check-label" for="opt1">Jawaban A</label>
            </div>
            <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="a1" id="opt2" value="2">
                <label class="form-check-label" for="opt2">Jawaban B</label>
            </div>
            <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="a1" id="opt3" value="3">
                <label class="form-check-label" for="opt3">Jawaban C</label>
            </div>
            <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="a1" id="opt4" value="4">
                <label class="form-check-label" for="opt4">Jawaban D</label>
            </div>
            <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="a1" id="opt5" value="5">
                <label class="form-check-label" for="opt5">Jawaban E</label>
            </div>
            <button class="btn btn-success text-white mt-4 mb-3">Selanjutnya</button>
        </div>
        <div class="container text-center flex-wrap mt-5">
            <button class="btn border border-grey">1</button>
            <button class="btn border border-grey">2</button>
            <button class="btn border border-grey">3</button>
            <button class="btn border border-grey">4</button>
            <button class="btn border border-grey">5</button>
            <button class="btn border border-grey">6</button>
            <button class="btn border border-grey">7</button>
            <button class="btn border border-grey">8</button>
            <button class="btn border border-grey">9</button>
            <button class="btn border border-grey">10</button>
            <button class="btn border border-grey">11</button>
            <button class="btn border border-grey">12</button>
            <button class="btn border border-grey">13</button>
            <button class="btn border border-grey">14</button>
            <button class="btn border border-grey">15</button>
            <button class="btn border border-grey">16</button>
            <button class="btn border border-grey">17</button>
            <button class="btn border border-grey">18</button>
            <button class="btn border border-grey">19</button>
            <button class="btn border border-grey">20</button>
        </div>    
    </div>
       
</template>

<script>
    export default {
        data() {
            return {
                timerCount: 7200
            }
        },
        watch: {
            timerCount: {
                handler(value) {
                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }
                },
                immediate: true
            }
        }
    }

</script>